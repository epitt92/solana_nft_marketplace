import { ChevronDownIcon } from '@heroicons/react/20/solid'
import React from 'react'
import Token from './Token'
import Header from './Header'
import { GridContextProvider, GridDropZone, GridItem, swap } from 'react-grid-dnd'
import NFTs from '../Archive/Assets/NFTs'
let def_coins = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 50000.0,
    change: 0.5,
    amount: 2.2,
    image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    price: 3000,
    change: 0.5,
    amount: 2.32,
    image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
  },
  {
    name: 'Cardano',
    symbol: 'ADA',
    price: 1.5,
    change: 0.5,
    amount: 400.3,
    image: 'https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860',
  },
  {
    name: 'Binance Coin',
    symbol: 'BNB',
    price: 300,
    change: 0.5,
    amount: 2.2,
    image: 'https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png?1547034615',
  },
  {
    name: 'Dogecoin',
    symbol: 'DOGE',
    price: 0.2,
    change: 0.5,
    amount: 2000,
    image: 'https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256',
  },
  {
    name: 'Tether',
    symbol: 'USDT',
    price: 1,
    change: 0.5,
    amount: 2000,
    image: 'https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707',
  },
]

export default function Tokens(props) {
  const [coins, setCoins] = React.useState(def_coins)

  function onChange(sourceId, sourceIndex, targetIndex, targetId) {
    const nextState = swap(coins, sourceIndex, targetIndex)
    setCoins(nextState)
  }

  return (
    <div className="w-full flex flex-col  border-zinc-800 ">
      <Header />
      <div className="flex flex-col flex-grow ">
        {props.balances && (
          <GridContextProvider onChange={onChange}>
            <GridDropZone id="items" boxesPerRow={1} rowHeight={60} style={{ height: 300 }}>
              {props.balances
                .filter(t => t.amount > 0)
                .map(item => (
                  <GridItem key={item.symbol}>
                    <Token token={item} />
                  </GridItem>
                ))}
            </GridDropZone>
          </GridContextProvider>
        )}
      </div>
      <NFTs nfts={props.nfts} />
    </div>
  )
}
