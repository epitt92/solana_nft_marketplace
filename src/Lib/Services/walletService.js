import { useAPI } from './api'

export function useWalletHistory(address = 'BwgpxJAFX9wtZSWxp3JUd65aky6a6N8F5xMqBfA39ohL', period) {
  return useAPI(`/getWalletPriceHistory`, { address, period })
}

export function useWalletNFTs(address = 'BwgpxJAFX9wtZSWxp3JUd65aky6a6N8F5xMqBfA39ohL') {
  return useAPI(`/getWalletNFTs`, { address })
}
