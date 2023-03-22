const functions = require('firebase-functions')
const db = require('./utils/firestore')
const dayjs = require('dayjs')
const { DB_COLLECTIONS } = require('./utils/constants')
const https = require('https')

const CoinGecko = require('coingecko-api')

const CoinGeckoClient = new CoinGecko()

exports.getCoinPrice = functions.https.onCall(async data => {
  const coin_id = data
  let price = await CoinGeckoClient.coins.fetch(coin_id, {})
  return price.data
})

exports.getMBC = functions.pubsub.schedule('every 2 minutes').onRun(async context => {
  try {
    let coin = null

    let call = https
      .get(' https://public-api.birdeye.so/public/price?address=AShCRr7fqsMf7ieM5AkJqNY566HsYmtvpvK8oPUL4Bh8', res => {
        let data = ''
        res.on('data', chunk => {
          data += chunk
        })
        res.on('end', async () => {
          data = JSON.parse(data)
          coin = data
          let price = coin.data.value
          console.log(coin)

          await db
            .collection(DB_COLLECTIONS.COINS)
            .doc('mbc')
            .update({
              price: price,
            })
            .then(() => {
              console.log('mbc successfully updated!')
            })
            .catch(error => {
              // The document probably doesn't exist.
              console.error('Error updating mbc: ', error)
            })
        })
      })
      .on('error', err => {
        console.log(err.message)
      })
  } catch (error) {
    console.log('error getting MBC', error)
  }

  return
})

exports.getSolana = functions.pubsub.schedule('every 2 minutes').onRun(async context => {
  let data = await CoinGeckoClient.coins.fetch('solana', {})
  let history = await CoinGeckoClient.coins.fetchMarketChart('solana', {})
  let price = data.data.market_data.current_price.usd
  let percent_change_day = data.data.market_data.price_change_percentage_24h
  let timeData = history.data.prices
  let his = []
  let breaks = Math.floor(timeData.length / 5)
  let i = 0

  timeData.forEach(e => {
    i++
    if (i === breaks) {
      his.push({ time: e[0], price: e[1] })
      i = 0
    }
  })

  await db
    .collection(DB_COLLECTIONS.COINS)
    .doc('solana')
    .update({
      price: price,
      percent_change_day: percent_change_day,
      history: his,
    })
    .then(() => {
      console.log('Solana successfully updated!')
    })
    .catch(error => {
      // The document probably doesn't exist.
      console.error('Error updating Solana: ', error)
    })

  return
})

exports.getETH = functions.pubsub.schedule('every 2 minutes').onRun(async context => {
  let data = await CoinGeckoClient.coins.fetch('ethereum', {})
  let history = await CoinGeckoClient.coins.fetchMarketChart('ethereum', {})
  let price = data.data.market_data.current_price.usd
  let image = data.data.image.large

  let percent_change_day = data.data.market_data.price_change_percentage_24h
  let timeData = history.data.prices
  let his = []
  let breaks = Math.floor(timeData.length / 5)
  let i = 0

  timeData.forEach(e => {
    i++
    if (i === breaks) {
      his.push({ time: e[0], price: e[1] })
      i = 0
    }
  })

  await db
    .collection(DB_COLLECTIONS.COINS)
    .doc('ethereum')
    .update({
      logo: image,
      price: price,
      percent_change_day: percent_change_day,
      history: his,
    })
    .then(() => {
      console.log('bitcoin successfully updated!')
    })
    .catch(error => {
      // The document probably doesn't exist.
      console.error('Error updating ETH: ', error)
    })
  return
})

exports.getBitcoin = functions.pubsub.schedule('every 2 minutes').onRun(async context => {
  let data = await CoinGeckoClient.coins.fetch('bitcoin', {})
  let history = await CoinGeckoClient.coins.fetchMarketChart('bitcoin', {})
  let price = data.data.market_data.current_price.usd
  let image = data.data.image.large

  let percent_change_day = data.data.market_data.price_change_percentage_24h
  let timeData = history.data.prices
  let his = []
  let breaks = Math.floor(timeData.length / 5)
  let i = 0

  timeData.forEach(e => {
    i++
    if (i === breaks) {
      his.push({ time: e[0], price: e[1] })
      i = 0
    }
  })

  await db
    .collection(DB_COLLECTIONS.COINS)
    .doc('bitcoin')
    .update({
      logo: image,
      price: price,
      percent_change_day: percent_change_day,
      history: his,
    })
    .then(() => {
      console.log('bitcoin successfully updated!')
    })
    .catch(error => {
      // The document probably doesn't exist.
      console.error('Error updating Bitcoin: ', error)
    })

  return
})

exports.getUSDC = functions.pubsub.schedule('every 2 minutes').onRun(async context => {
  let data = await CoinGeckoClient.coins.fetch('usd-coin', {})
  let history = await CoinGeckoClient.coins.fetchMarketChart('usd-coin', {})

  let price = data.data.market_data.current_price.usd
  let percent_change_day = data.data.market_data.price_change_percentage_24h
  let timeData = history.data.prices
  let his = []
  let breaks = Math.floor(timeData.length / 5)
  let i = 0

  timeData.forEach(e => {
    i++
    if (i === breaks) {
      his.push({ time: e[0], price: e[1] })
      i = 0
    }
  })

  await db
    .collection(DB_COLLECTIONS.COINS)
    .doc('usdc')
    .update({
      price: price,
      percent_change_day: percent_change_day,
      history: his,
    })
    .then(() => {
      console.log('usdc successfully updated!')
    })
    .catch(error => {
      // The document probably doesn't exist.
      console.error('Error updating usdc: ', error)
    })

  return
})
