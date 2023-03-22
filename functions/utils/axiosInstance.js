const axios = require('axios')

const axiosInstance = axios.create({
  baseURL: process.env.MAGIC_EDEN_API_BASE_URL,
  timeout: 20000, // 20 seconds
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    Accept: 'application/json',
  },
})

module.exports = axiosInstance
