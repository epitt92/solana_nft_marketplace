const functions = require('firebase-functions')
const db = require('./utils/firestore')

const dayjs = require('dayjs')
const { DB_COLLECTIONS } = require('./utils/constants')
const theblockchainapi = require('./utils/theblockchainapi')
const axiosMEInstance = require('./utils/axiosMEInstance')

const INVALID_REQUEST_MESSAGE = 'invalid request'

/**
 * This is an API to add wallet
 */
exports.addWallet = functions.https.onRequest(async (req, res) => {
  const address = req.body.address

  // validate the address
  if (typeof address !== 'string' || address.trim().length === 0) {
    return res.status(400).json({
      message: INVALID_REQUEST_MESSAGE,
    })
  }

  try {
    // verify wallet is exist or not. If it exists then return error response.
    const wallet = await db.collection(DB_COLLECTIONS.WALLETS).doc(address).get()
    if (wallet.exists) {
      // return error response
      return res.status(409).json({
        message: 'wallet is already existed',
      })
    }
    console.info('address', address)

    // push the new wallet into Firestore
    db.collection(DB_COLLECTIONS.WALLETS).doc(address).set({
      address,
      nfts: [],
      currentTotalPrice: 0.0,
      totalPricePerHour: [],
      createdAt: Date.now(),
    })

    // return success response
    return res.status(200).json({
      message: 'success',
    })
  } catch (error) {
    // return error response
    return res.status(500).json({
      message: error.message,
    })
  }
})

/**
 * This is an API to get wallet NFTs
 */
exports.getUserRewards = functions.https.onRequest(async (req, res) => {
  const q = await db.collection('wallet_users')
  const querySnapshot = q.get().then(querySnapshot => {
    const promises = []
    querySnapshot.forEach(doc => {
      let wallet = doc.data()
      let list = []
      if (wallet.purchases && wallet.purchases['Prosperous Parrots#WL']) {
        console.log('username', wallet.username, 'wallet', wallet.wallet, 'discordID', wallet.discordID)
        console.log('******************')
      }
    })
  })

  // querySnapshot.forEach(doc => {
  //   // doc.data() is never undefined for query doc snapshots
  //   let wallet = doc.data()
  //   if (wallet.purchases) {
  //     console.log(wallet)
  //   }
  // })
})

/**
 * This is an API to get wallet NFTs
 */
exports.getWalletNFTs = functions.https.onRequest(async (req, res) => {
  const address = req.query.address

  // validate the address
  if (typeof address !== 'string' || address.trim().length === 0) {
    return res.status(400).json({
      message: INVALID_REQUEST_MESSAGE,
    })
  }

  try {
    // verify wallet is exist or not. If it does not exist then return error response.
    const wallet = await db.collection(DB_COLLECTIONS.WALLETS).doc(address).get()
    if (!wallet.exists) {
      // return error response
      return res.status(404).json({
        message: 'wallet does not existed',
      })
    }

    const docSnapshot = wallet.data()

    return res.status(200).json({
      nfts: docSnapshot.nfts,
      totalPrice: docSnapshot.currentTotalPrice,
    })
  } catch (error) {
    console.error(error)

    return res.status(500).json({
      message: error.message,
    })
  }
})

/**
 * This is an API to get wallet history
 */
exports.getWalletPriceHistory = functions.https.onRequest(async (req, res) => {
  const address = req.query.address
  const period = req.query.period

  // validate the address
  if (typeof address !== 'string' || address.trim().length === 0) {
    return res.status(400).json({
      message: INVALID_REQUEST_MESSAGE,
    })
  }

  // validate the period
  if (!['1D', '1W', '1M', '6M', '1Y'].includes(period)) {
    return res.status(400).json({
      message: INVALID_REQUEST_MESSAGE,
    })
  }

  try {
    // verify wallet is exist or not. If it does not exist then return error response.
    const wallet = await db.collection(DB_COLLECTIONS.WALLETS).doc(address).get()
    if (!wallet.exists) {
      // return error response
      return res.status(404).json({
        message: 'wallet does not existed',
      })
    }

    const docSnapshot = wallet.data()

    const totalPricePerHour = docSnapshot.totalPricePerHour

    // get the subset of data in 1 day, 1 week, 1 month, 6 months and 1 year
    const map = {
      '1D': [1, 'day'],
      '1W': [1, 'week'],
      '1M': [1, 'month'],
      '6M': [6, 'month'],
      '1Y': [1, 'year'],
    }

    const agoDate = dayjs().subtract(map[period][0], map[period][1])
    const data = totalPricePerHour.filter(obj => dayjs(obj.date).isAfter(agoDate))

    return res.status(200).json({
      data,
    })
  } catch (error) {
    console.error(error)

    return res.status(500).json({
      message: error.message,
    })
  }
})

/**
 * This is a scheduler to run every 5 minutes to get all the NFTs of given address,
 * get all NFTs information and calculate total price of all the NFTs and update nfts,
 * current total price and totalPricePerHour in DB.
 */
exports.getAllNFTsWalletScheduler = functions.pubsub.schedule('*/5 * * * *').onRun(async _event => {
  const wallets = await db.collection(DB_COLLECTIONS.WALLETS).get()
  wallets.forEach(async docSnapshot => {
    // Get document data for each wallet
    const docData = docSnapshot.data()
    const address = docData.address
    console.info('address', address)

    // Get all NFTs data of given wallet
    let apiInstance = new theblockchainapi.SolanaWalletApi()
    let network = 'mainnet-beta'
    let publicKey = address
    let nftsBelongingResponse
    try {
      nftsBelongingResponse = await apiInstance.solanaGetNFTsBelongingToWallet(network, publicKey)
    } catch (error) {
      console.error(error)
      return
    }
    const nftsMetaData = nftsBelongingResponse.nfts_metadata

    let totalPrice = 0
    const uniqueCollectionList = {}
    const nfts = []
    const nftsHaveNoCollectionInfo = []
    // loop through each NFT, get NFT data, collection floor price and update total price
    for (let i = 0; i < nftsMetaData.length; i++) {
      // get tokens with given mint address
      let tokensResponse
      try {
        tokensResponse = await getTokens(nftsMetaData[i].mint)
      } catch (error) {
        console.error(error)

        continue
      }

      // add NFT object to nfts list
      nfts.push({
        mintAddress: tokensResponse.mintAddress,
        collection: tokensResponse.collection,
        name: tokensResponse.name,
        image: tokensResponse.image,
        attributes: tokensResponse.attributes,
      })

      // if a NFT does not contain collection info, then continue to next NFT
      if (!tokensResponse.collection) {
        nftsHaveNoCollectionInfo.push(tokensResponse.name)

        continue
      }

      // get collection floor price
      let collectionFloorPrice
      try {
        collectionFloorPrice = await getCollectionFloorPrice(tokensResponse.collection, uniqueCollectionList)
      } catch (error) {
        console.error(error)

        continue
      }

      // add up collection floor price
      totalPrice += collectionFloorPrice
    }
    console.info('totalPrice', totalPrice)
    console.info('nftsHaveNoCollectionInfo', JSON.stringify(nftsHaveNoCollectionInfo))

    // update wallet DB
    try {
      const twoDecimalsTotalPrice = parseFloat(totalPrice.toFixed(2))
      const walletData = {
        nfts,
        currentTotalPrice: twoDecimalsTotalPrice,
        updatedAt: Date.now(),
        totalPricePerHour: [
          ...docData.totalPricePerHour,
          {
            date: Date.now(),
            value: twoDecimalsTotalPrice,
          },
        ],
      }
      await db.collection(DB_COLLECTIONS.WALLETS).doc(address).update(walletData)
    } catch (error) {
      console.error(error)
      return
    }
  })
})

/**
 * Get tokens given by mint address
 *
 * @param {string} mintAddress
 *
 * @returns Object
 */
const getTokens = async mintAddress => {
  // get collection information
  const tokenResponse = await axiosMEInstance.get(`/v2/tokens/${mintAddress}`)

  return tokenResponse.data
}

/**
 * Get collection floor price of given mind address.
 *
 * @returns Promise
 */
const getCollectionFloorPrice = async (collectionSymbol, uniqueCollectionList) => {
  // if there is a key of collectionSymbol in uniqueCollectionList then just return its value as floor price
  if (uniqueCollectionList[collectionSymbol]) {
    return uniqueCollectionList[collectionSymbol]
  }

  // get collection stats
  const collectionsResponse = await axiosMEInstance.get(`/v2/collections/${collectionSymbol}/stats`)

  // get collection floor price and store it into uniqueCollectionList object
  const collectionPrice = collectionsResponse.data.floorPrice / 1000000000
  uniqueCollectionList[collectionSymbol] = collectionPrice

  return collectionPrice
}

/**
 * Get collection floor price of given mind address.
 *
 * @returns Promise
 */
exports.getCollectionMarketData = functions.https.onCall(async (data, context) => {
  // if there is a key of collectionSymbol in uniqueCollectionList then just return its value as floor price
  // get collection stats
  const collectionsResponse = await axiosMEInstance.get(`/v2/collections/${data.symbol}/stats`)

  // get collection floor price and store it into uniqueCollectionList object
  return collectionsResponse.data
})

/**
 * Get collection floor price of given mind address.
 *
 * @returns Promise
 */
exports.getTopNFTCollectionsData = functions.pubsub.schedule('* * * * *').onRun(async _event => {
  try {
    // if there is a key of collectionSymbol in uniqueCollectionList then just return its value as floor price
    // get collection stats

    let TopCollectionData = []
    let collections = ['solana_money_boys', 'solana_money_girls', 'solana_diamond_boys']
    for (let i = 0; i < collections.length; i++) {
      const collectionsResponseStat = await axiosMEInstance.get(`/v2/collections/${collections[i]}/stats`)
      const collectionsResponseColl = await axiosMEInstance.get(`/v2/collections/${collections[i]}`)
      const collectionResponseAct = await axiosMEInstance.get(
        `/v2/collections/${collections[i]}/activities?offset=0&limit=400`,
      )
      let coll = collectionsResponseColl.data
      let stat = collectionsResponseStat.data
      let act = collectionResponseAct.data

      let marketToken = { collection: coll, stat: stat, activities: act }
      console.log(marketToken)
      TopCollectionData.push(marketToken)
    }

    return await db
      .collection(DB_COLLECTIONS.PROJECTS)
      .doc('solana_money_boys')
      .update({ marketData: TopCollectionData })
  } catch (error) {
    console.log(error)
    return error
  }
})

exports.getNFTsWithMarketData = functions.https.onCall(async (data, context) => {
  try {
    // if there is a key of collectionSymbol in uniqueCollectionList then just return its value as floor price
    // get collection stats
    let nfts = data.nfts
    for (let i = 0; i < nfts.length; i++) {
      let nft = nfts[i]

      const tokenResponse = await axiosMEInstance.get(`/v2/tokens/${nft.mint}`)
      let token = tokenResponse.data
      nfts[i].marketData = token
      const collectionsResponse = await axiosMEInstance.get(`/v2/collections/${nfts[i].marketData.collection}/stats`)
      let marketToken = collectionsResponse.data
      nfts[i].collectionData = marketToken
    }
    // for (let i = 0; i < nfts.length; i++) {
    //   let nft = nfts[i]
    //   const collectionsResponse = await axiosMEInstance.get(`/v2/collections/${nft.marketData.collection}/stats`)
    //   let marketToken = collectionsResponse.data
    //   nfts[i].collectionData = marketToken
    // }
    return nfts
  } catch (error) {
    console.log(error)
    return error
  }
})
