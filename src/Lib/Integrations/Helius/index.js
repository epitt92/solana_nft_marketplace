const axios = require('axios')

let api_key = '9c5e1824-6642-4920-8ae6-135e3724e374'

export const getNFTs = async wallet => {
  console.log('getting NFTs')

  try {
    let url = `https://api.helius.xyz/v0/addresses/${wallet}/nfts?api-key=${api_key}`
    const { data } = await axios.get(url)
    return data
  } catch (error) {
    console.log('error getting nfts from helius', error)
  }
}

export const getBalances = async wallet => {
  try {
    console.log('getting Balances')

    let url = `https://api.helius.xyz/v0/addresses/${wallet}/balances?api-key=${api_key}`
    const { data } = await axios.get(url)
    return data
  } catch (error) {
    console.log('error getting balances from helius', error)
  }
}

export const getTransactions = async wallet => {
  try {
    console.log('getting Transactions')
    let url = `https://api.helius.xyz/v0/addresses/${wallet}/transactions?api-key=${api_key}`
    const { data } = await axios.get(url)
    return data
  } catch (error) {
    console.log('error getting transactions from helius', error)
  }
}
