const axios = require('axios')

const axiosMEInstance = axios.create({
  baseURL: process.env.MAGIC_EDEN_API_BASE_URL,
  timeout: 50000, // 50 seconds
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    Accept: 'application/json',
  },
})

module.exports = axiosMEInstance
