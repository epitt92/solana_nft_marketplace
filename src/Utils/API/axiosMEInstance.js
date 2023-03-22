const axios = require('axios')

const axiosMEInstance = axios.create({
  baseURL: 'https://api-mainnet.magiceden.dev',
  timeout: 20000, // 20 seconds
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    Accept: 'application/json',
  },
})

module.exports = axiosMEInstance
