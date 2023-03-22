const theblockchainapi = require('theblockchainapi')

let defaultClient = theblockchainapi.ApiClient.instance

let APIKeyID = defaultClient.authentications['APIKeyID']
APIKeyID.apiKey = process.env.THE_BLOCK_CHAIN_API_KEY

let APISecretKey = defaultClient.authentications['APISecretKey']
APISecretKey.apiKey = process.env.THE_BLOCK_CHAIN_API_SECRET_KEY

module.exports = theblockchainapi
