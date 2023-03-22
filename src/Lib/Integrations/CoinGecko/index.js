import { getFunctions, httpsCallable } from 'firebase/functions'

export const getPrices = async tokens => {
  let coins = tokens
  let totalBalance = 0
  try {
    for (let j = 0; j < coins.length; j++) {
      let coin = coins[j].metadata
      if (coin.extensions && coin.extensions.coingeckoId) {
        const functions = getFunctions()
        let getCoinPrice = await httpsCallable(functions, 'getCoinPrice')
        await getCoinPrice(coin.extensions.coingeckoId).then(result => {
          // Read result of the Cloud Function.
          /** @type {any} */
          if (result.data && result.data.market_data) {
            let price = result.data.market_data.current_price.usd
            let worth = (price * coins[j].amount) / 10 ** coins[j].decimals
            coins[j].price = result.data.market_data.current_price.usd
            coins[j].priceChange24h = result.data.market_data.price_change_percentage_24h
            coins[j].worth = worth
            totalBalance += worth
          }
        })
      }
    }
  } catch (error) {
    console.log('error getting prices from coingecko', error)
  }
  return { coins: coins, totalBalance: totalBalance }
}
