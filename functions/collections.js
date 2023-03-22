const functions = require('firebase-functions')
const db = require('./utils/firestore')
const { DB_COLLECTIONS } = require('./utils/constants')
const axiosMEInstance = require('./utils/axiosMEInstance')
const INVALID_REQUEST_MESSAGE = 'invalid request'

/**
 * Get collection floor price of given mind address.
 *
 * @returns Promise
 */
exports.getCollectionAllData = functions.https.onCall(async (data, context) => {
  // if there is a key of collectionSymbol in uniqueCollectionList then just return its value as floor price
  // get collection stats
  const collectionsGenResponse = await axiosMEInstance.get(`/v2/collections/${data.symbol}`)
  const collectionsListingResponse = await axiosMEInstance.get(`/v2/collections/${data.symbol}/listings`)
  const collectionsStatResponse = await axiosMEInstance.get(`/v2/collections/${data.symbol}/stats`)

  // get collection floor price and store it into uniqueCollectionList object
  return {
    general: collectionsGenResponse.data,
    listing: collectionsListingResponse.data,
    stats: collectionsStatResponse.data,
  }
})
