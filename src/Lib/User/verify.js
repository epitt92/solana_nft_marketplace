// verify methods for a user

export const verifyUser = async wallet => {
  console.log('Verifying user...')
  let isVerified = false
  let verificationResult = 'not_auth'
  let nfts = []
  let count = 0
  let tokenCount = await fetch('https://portfolio-api.pyx.world/NFT/tokenCount/' + wallet)
    .then(response => response.json())
    .then(data => (count = data))
    .catch(error => {
      console.log('error getting wallet token count! ', error)
    })
  let increment = Math.floor(count / 20) + 1
  let start = 0
  let size = 20
  let nftFetch = null
  for (let i = 0; i < increment; i++) {
    nftFetch = await fetch('https://portfolio-api.pyx.world/NFT/' + wallet + '/' + start + '/' + size)
      .then(response => response.json())
      .then(data => (nfts = data.concat(nfts)))
      .catch(error => {
        console.log('error getting wallet nfts! ', error)
      })
    start += 20
    size += 20
  }
  nfts.forEach(nft => {
    let sub = nft.name.substring(0, 10)
    if (sub === 'Solana Dia' || sub === 'Solana Mon' || sub === 'Money Key#') {
      isVerified = true
      verificationResult = 'auth'
    }
  })
  if (!isVerified) {
    let f = farm
    f.forEach(p => {
      if (wallet === p.account.identity) {
        isVerified = true
        verificationResult = 'auth'
      }
    })
  }

  if (!isVerified) {
    let matricaBoys = []
    let matricaVerified = await fetch(
      'https://api.matricalabs.io/v1/snapshot/role/927403040342937621?apiKey=2MGNvYtuCFIxKMNyDoPmU',
    )
      .then(response => response.json())
      .then(data => (matricaBoys = data))
      .catch(error => {
        console.log('error getting matrica accounts ', error)
      })
    matricaBoys.forEach(item => {
      if (item.id === wallet) {
        isVerified = true
        verificationResult = 'auth'
      }
    })
  }

  if (!isVerified) {
    let matricaGirls = []
    let matricaVerifiedGirls = await fetch(
      'https://api.matricalabs.io/v1/snapshot/role/963922283464892436?apiKey=2MGNvYtuCFIxKMNyDoPmU',
    )
      .then(response => response.json())
      .then(data => (matricaGirls = data))
      .catch(error => {
        console.log('error getting matrica smg accounts ', error)
      })
    matricaGirls.forEach(it => {
      if (it.id === wallet) {
        isVerified = true
        verificationResult = 'auth'
      }
    })
  }

  if (!isVerified) {
    let matricaDiamonds = []
    let matricaVerifiedDiamonds = await fetch(
      'https://api.matricalabs.io/v1/snapshot/role/942204973549228133?apiKey=2MGNvYtuCFIxKMNyDoPmU',
    )
      .then(response => response.json())
      .then(data => (matricaDiamonds = data))
      .catch(error => {
        console.log('Error getting matrica db accounts ', error)
      })
    matricaDiamonds.forEach(i => {
      if (i.id === wallet) {
        isVerified = true
        verificationResult = 'auth'
      }
    })
  }

  return { verificationResult, isVerified }
}

export const verifyExternalUser = async wallet => {
  console.log('Verifying user...')
  // let isVerified = false
  // let verificationResult = 'not_auth'
  // let nfts = []
  // let count = 0
  // let tokenCount = await fetch('https://portfolio-api.pyx.world/NFT/tokenCount/' + wallet)
  //   .then(response => response.json())
  //   .then(data => (count = data))
  //   .catch(error => {
  //     console.log('error getting wallet token count! ', error)
  //   })
  // let increment = Math.floor(count / 20) + 1
  // let start = 0
  // let size = 20
  // let nftFetch = null
  // for (let i = 0; i < increment; i++) {
  //   nftFetch = await fetch('https://portfolio-api.pyx.world/NFT/' + wallet + '/' + start + '/' + size)
  //     .then(response => response.json())
  //     .then(data => (nfts = data.concat(nfts)))
  //     .catch(error => {
  //       console.log('error getting wallet nfts! ', error)
  //     })
  //   start += 20
  //   size += 20
  // }
  // nfts.forEach(nft => {
  //   let sub = nft.name.substring(0, 10)
  //   if (sub === 'Solana Dia' || sub === 'Solana Mon' || sub === 'Money Key#') {
  //     isVerified = true
  //     verificationResult = 'auth'
  //   }
  // })

  // if (!isVerified) {
  //   let matricaBoys = []
  //   let matricaVerified = await fetch(
  //     'https://api.matricalabs.io/v1/snapshot/role/927403040342937621?apiKey=2MGNvYtuCFIxKMNyDoPmU',
  //   )
  //     .then(response => response.json())
  //     .then(data => (matricaBoys = data))
  //     .catch(error => {
  //       console.log('error getting matrica accounts ', error)
  //     })
  //   matricaBoys.forEach(item => {
  //     if (item.id === wallet) {
  //       isVerified = true
  //       verificationResult = 'auth'
  //     }
  //   })
  // }

  // if (!isVerified) {
  //   let matricaGirls = []
  //   let matricaVerifiedGirls = await fetch(
  //     'https://api.matricalabs.io/v1/snapshot/role/963922283464892436?apiKey=2MGNvYtuCFIxKMNyDoPmU',
  //   )
  //     .then(response => response.json())
  //     .then(data => (matricaGirls = data))
  //     .catch(error => {
  //       console.log('error getting matrica smg accounts ', error)
  //     })
  //   matricaGirls.forEach(it => {
  //     if (it.id === wallet) {
  //       isVerified = true
  //       verificationResult = 'auth'
  //     }
  //   })
  // }

  // if (!isVerified) {
  //   let matricaDiamonds = []
  //   let matricaVerifiedDiamonds = await fetch(
  //     'https://api.matricalabs.io/v1/snapshot/role/942204973549228133?apiKey=2MGNvYtuCFIxKMNyDoPmU',
  //   )
  //     .then(response => response.json())
  //     .then(data => (matricaDiamonds = data))
  //     .catch(error => {
  //       console.log('Error getting matrica db accounts ', error)
  //     })
  //   matricaDiamonds.forEach(i => {
  //     if (i.id === wallet) {
  //       isVerified = true
  //       verificationResult = 'auth'
  //     }
  //   })
  // }

  let verificationResult = 'auth'
  let isVerified = true

  return { verificationResult, isVerified }
}
