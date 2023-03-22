import ThemeProvider from '@mui/material/styles/ThemeProvider'
import { TokenListProvider } from '@solana/spl-token-registry'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets'
import { clusterApiUrl } from '@solana/web3.js'
import { collection, getFirestore, onSnapshot, query, where } from 'firebase/firestore'
import React, { useEffect, useMemo } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout'
import FirebaseContextProvider from './Contexts/firebaseContext'
// import { Collections } from './Lib/Constants/constants'
import { getPrices } from './Lib/Integrations/CoinGecko/index'
import { addUserToFirestore } from './Lib/Integrations/Firebase/accounts'
import { getBalances, getNFTs } from './Lib/Integrations/Helius'
import { store } from './Lib/Redux/store'
import { theme } from './Styles/theme'
import { addTokenMetadata } from './Utils/Functions/TokenMetadata'
import Home from './Views/App/Home/Home'
import Collection from './Views/App/Collection/Collection'
import Collections from './Views/App/Collections/Collections'
import Portfolio from './Views/App/Portfolio/Portfolio'
import Airdrop from './Views/App/Airdrop/Airdrop'
import Slash from './Views/App/Slash/Slash'
require('@solana/wallet-adapter-react-ui/styles.css')
const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST

function App() {
  const [user, setUser] = React.useState(null)
  const [tokenList, setTokenList] = React.useState(null)
  const [projects, setProjects] = React.useState(null)
  const [userWallets, setUserWallets] = React.useState(null)
  const [localWallet, setLocalWallet] = React.useState(null)
  const [nfts, setNfts] = React.useState({ nfts: [] })
  const [balances, setBalances] = React.useState(null)
  const [totalBalance, setTotalBalance] = React.useState(null)
  const [transactions, setTransactions] = React.useState(null)
  const network = WalletAdapterNetwork.Mainnet
  const endpoint = useMemo(() => clusterApiUrl(network), [network])
  const wallets = useMemo(() => [new PhantomWalletAdapter(), new SolflareWalletAdapter()], [network])

  /** Get wallet profile from the server */
  useEffect(async () => {
    if (localWallet) {
      console.log('Getting wallet profile from server')
      console.log('localwallet, ', localWallet)
      let wallet = localWallet
      const db = getFirestore()
      const collectionRef = collection(db, 'wallet_users')
      const q = query(collectionRef, where('wallet', '==', wallet))
      const unsubscribe = await onSnapshot(q, querySnapshot => {
        const userCollection = querySnapshot.docs.map(doc => doc.data())
        let user = userCollection[0]
        if (user) {
          setUser(user)
        } else {
          console.log('wallet cached, but not user found. ')
          addUserToFirestore(localWallet)
        }
      })
      return () => {
        unsubscribe()
      }
    }
  }, [localWallet])

  /** Get Assets */
  useEffect(async () => {
    if (user && tokenList) {
      let wallet = user.wallet
      // GET DATA FROM HELIUS //

      let resNFT = await getNFTs(wallet)
      setNfts(resNFT)

      let resBalances = await getBalances(wallet)
      // let resTransactions = await getTransactions(wallet)

      // GET PRICES, METADATA AND TOTAL BALANCE FOR SPL TOKENS //
      let prices = await getPrices(await addTokenMetadata(tokenList, resBalances.tokens, resBalances.nativeBalance))
      let tokens = prices.coins
      let totalBalance = prices.totalBalance

      setBalances(tokens)
      setTotalBalance(totalBalance)

      // setTransactions(resTransactions)
    }
  }, [tokenList, user])

  /** Local Storage Caching */
  useEffect(async () => {
    let pullLocalWallet = await JSON.parse(localStorage.getItem('userWallet'))
    setLocalWallet(pullLocalWallet)
    let coinsLocal = await JSON.parse(localStorage.getItem('coins'))
    let totalBalance = await JSON.parse(localStorage.getItem('totalBalance'))
    let nfts = await JSON.parse(localStorage.getItem('nfts'))
  }, [])

  /** GET token list */
  useEffect(async () => {
    await new TokenListProvider().resolve().then(async tokens => {
      const tokenList = await tokens.filterByClusterSlug('mainnet-beta').getList()
      setTokenList(tokenList)
    })
  }, [])

  useEffect(async () => {
    const db = getFirestore()
    const collectionRef = collection(db, 'wallet_users')
    const q = query(collectionRef)
    const unsubscribe = onSnapshot(q, querySnapshot => {
      let wallets = querySnapshot.docs.map(doc => doc.data())
      setUserWallets(wallets)
    })
    return () => {
      unsubscribe()
    }
  }, [user])

  useEffect(async () => {
    console.log('localWallet', localWallet)
  }, [localWallet])

  useEffect(async () => {
    const db = getFirestore()
    const collectionRef = collection(db, Collections.PROJECTS)
    const q = query(collectionRef)
    const unsubscribe = onSnapshot(q, querySnapshot => {
      let projects = querySnapshot.docs.map(doc => doc.data())
      setProjects(projects)
    })
    return () => {
      unsubscribe()
    }
  }, [user])

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets}>
            <FirebaseContextProvider>
              <Router>
                <Layout setLocalWallet={setLocalWallet} projects={projects} user={user}>
                  <Routes>
                    <Route path="/" element={<Home projects={projects} />}></Route>
                    <Route path="/collection/monke" element={<Collection />}></Route>
                    <Route path="/collections" element={<Collections />}></Route>
                    <Route path="/airdrop" element={<Airdrop />}></Route>
                    <Route path="/portfolio" element={<Portfolio />}></Route>
                    <Route path="/slash" element={<Slash />}></Route>
                  </Routes>
                </Layout>
              </Router>
            </FirebaseContextProvider>
          </WalletProvider>
        </ConnectionProvider>
      </Provider>
    </ThemeProvider>
  )
}
export default App
