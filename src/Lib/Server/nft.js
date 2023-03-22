import { getFunctions, httpsCallable } from 'firebase/functions'

// functions for getting NFT collection data from server

export const getProjectData = async symbol => {
  try {
    const functions = getFunctions()
    var getCollectionData = await httpsCallable(functions, 'getCollectionAllData')
    let res = await getCollectionData({ symbol: symbol })
    return { data: res }
  } catch (error) {
    console.log('error pulling project data', error)
    return { error: error }
  }
}
