import axios from 'axios'
import useSWR from 'swr'
import useApiResponse from '../../Utils/hooks/useAPIResponse.js'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL.replace('{{REACT_APP_PROJECT_ID}}', process.env.REACT_APP_PROJECT_ID),
})

api.interceptors.request.use(config => {
  // TODO: Auth - attach token on every request
  // const token = getToken()
  // if (token) {
  //   config.headers.authorization = `Bearer ${token}`
  // }
  return config
})

api.interceptors.response.use(
  res => {
    return res
  },
  error => {
    if (error.response.status === 401) {
      // TODO: Auth - log out user
      // removeToken()
    }
  },
)
export default api
export function getCacheKey(url, params) {
  const cacheKey = [url]
  if (params) {
    cacheKey.push(JSON.stringify(params))
  }
  // cacheKey.push(getToken())
  return cacheKey
}

export function useAPI(url, params, config) {
  const { data, mutate } = useSWR(getCacheKey(url, params), async () => {
    const { data } = await api.get(url, { params, ...config })
    data.isLoading = false
    return data
  })

  const cachedResponse = useApiResponse(data)

  return {
    data: cachedResponse || { isLoading: true },
    mutate,
  }
}
