// const theblockchainapi = require('theblockchainapi')
// const axios = require('axios').default
// const axiosMEInstance = require('../../../Utils/API/axiosMEInstance')

// let defaultClient = theblockchainapi.ApiClient.instance

// // Get a free API Key Pair here: https://dashboard.blockchainapi.com/api-keys

// let APIKeyID = defaultClient.authentications['APIKeyID']
// APIKeyID.apiKey = 'bjWaAu1pKhaSfmi'

// let APISecretKey = defaultClient.authentications['APISecretKey']
// APISecretKey.apiKey = 'cuNH9e045PhaFnB'

// let apiInstance = new theblockchainapi.SolanaWalletApi()
// let apiAnalyticInstance = new theblockchainapi.SolanaNFTMarketplacesApi()

// let net = 'mainnet-beta'

// // let network = 'mainnet-beta' // String | The network ID (devnet, mainnet-beta)

// export async function getWalletTransactions(publicKey) {
//   console.log(publicKey)
//   const url = `https://api.blockchainapi.com/v1/solana/wallet/${net}/${publicKey}/transactions`

//   const config = {
//     method: 'get',
//     url: url,
//     headers: {
//       APIKeyId: 'bjWaAu1pKhaSfmi',
//       APISecretKey: 'cuNH9e045PhaFnB',
//     },
//   }
//   let signatureRes = await axios(config)
//   let signatures = signatureRes.data
//   let transactions = []
//   console.log('signatures', signatures)
//   for await (let sig of signatures) {
//     const url = `https://api.blockchainapi.com/v1/solana/transaction/mainnet-beta/${sig}`

//     const txn_config = {
//       method: 'get',
//       url: url,
//       headers: {
//         APIKeyId: 'bjWaAu1pKhaSfmi',
//         APISecretKey: 'cuNH9e045PhaFnB',
//       },
//     }
//     let txnRes = await axios(txn_config)
//     console.log(txnRes.data)
//     transactions.push(txnRes.data)
//   }
//   return transactions
// }

// export async function getSOL(wallet) {
//   const balance_request = new theblockchainapi.BalanceRequest() // BalanceRequest |
//   balance_request.public_key = wallet
//   balance_request.network = net
//   balance_request.unit = 'sol'

//   let opts = {
//     balanceRequest: balance_request,
//   }

//   return apiInstance.solanaGetBalance(opts).then(
//     data => {
//       console.log('API called successfully.')
//       return data
//     },
//     error => {
//       console.error(error)
//       return error
//     },
//   )
// }

// export async function getSPLTokenPrice(symbol, address) {
//   console.log('symbol,', symbol, address)
//   const url = 'https://api.blockchainapi.com/third-party-apis/OdAtu7xds9aTiZYW4Xnu/v0.0.1/sol/tokenprice'
//   const headers = {
//     APIKeyId: 'bjWaAu1pKhaSfmi',
//     APISecretKey: 'cuNH9e045PhaFnB',
//   }
//   const response = await axios.post(
//     url,
//     {
//       max_retries: 10.0,
//       token_symbol: 'INU',
//       token_address: '5jFnsfx36DyGk8uVGrbXnVUMTsBkPXGpx6e69BiGFzko',
//     },
//     {
//       headers,
//     },
//   )
//   console.log(response.data, response.status)
//   return response
// }

// export async function getSPLTokens(wallet) {
//   let publicKey = wallet
//   let network = net

//   let opts = {
//     includeNfts: false, // Boolean | Whether or not to include NFTs in the response
//     includeZeroBalanceHoldings: false, // Boolean | Whether or not to include holdings that have zero balance. This indicates that the wallet held this token or NFT in the past, but no longer holds it.
//   }

//   return apiInstance.solanaGetTokensBelongingToWallet(network, publicKey, opts).then(
//     data => {
//       console.log('API SPL called successfully.')
//       return data
//     },
//     error => {
//       console.error(error)
//       return error
//     },
//   )
// }

// const getNFTTokens = async mintAddress => {
//   // get collection information
//   const tokenResponse = await axiosMEInstance.get(`/v2/tokens/${mintAddress}`)
//   return tokenResponse.data
// }

// export async function getNFTs(wallet) {
//   let address = wallet
//   let apiInstance = new theblockchainapi.SolanaWalletApi()
//   let network = 'mainnet-beta'
//   let publicKey = wallet
//   let nftsBelongingResponse
//   try {
//     nftsBelongingResponse = await apiInstance.solanaGetNFTsBelongingToWallet(network, publicKey)
//   } catch (error) {
//     console.info(
//       `wallets::getAllNFTsWalletScheduler - failed getting NFTs belonging to wallet of address ${publicKey}`,
//       error.message,
//     )
//     return
//   }
//   return nftsBelongingResponse.nfts_metadata
// }

// export async function getNFTFloorPrice(mintAddresses) {
//   let nFTAnalyticsRequest = new theblockchainapi.NFTAnalyticsRequest() // NFTAnalyticsRequest |
//   let mint_addresses = mintAddresses
//   nFTAnalyticsRequest.mint_addresses = mint_addresses
//   nFTAnalyticsRequest.start_time = -1
//   let opts = {
//     nFTAnalyticsRequest: nFTAnalyticsRequest,
//   }

//   return await apiAnalyticInstance.solanaGetNFTMarketplaceAnalytics(opts).then(
//     data => {
//       console.log('API called successfully.')
//       return data
//     },
//     error => {
//       console.error(error)
//       return error
//     },
//   )
// }
