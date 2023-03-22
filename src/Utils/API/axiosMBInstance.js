import axios from 'axios'

const axiosMBInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL.replace('{{REACT_APP_PROJECT_ID}}', process.env.REACT_APP_PROJECT_ID),
  timeout: 20000, // 20 seconds
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    Accept: 'application/json',
  },
})

export default axiosMBInstance
