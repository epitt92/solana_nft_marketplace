export const getEnrichedCoins = tokens => {
  let supportedCoins = coins
  let returnedTokens = []
  let hasMBC = false
  let hasUSDC = false
  // console.log(tokens)
  tokens.forEach(token => {
    for (let i = 0; i < supportedCoins.length; i++) {
      let supportedCoin = supportedCoins[i]
      if (token.mint_address == 'AShCRr7fqsMf7ieM5AkJqNY566HsYmtvpvK8oPUL4Bh8') {
        hasMBC = true
      }
      if (token.mint_address == 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v') {
        hasUSDC = true
      }
      if (token.mint_address === supportedCoin.mint_address) {
        token.coin = supportedCoin
        returnedTokens.push(token)
      }
    }
  })
  if (!hasMBC) {
    let mbc = {
      amount: 0,
      ui_amount: 0.0,
      coin: {
        logo: 'https://i.postimg.cc/8kBRcWKp/mbc.jpg',
        mint_address: 'AShCRr7fqsMf7ieM5AkJqNY566HsYmtvpvK8oPUL4Bh8',
        name: 'MoneyBoy Coin',
      },
    }
    returnedTokens.push(mbc)
  }
  if (!hasUSDC) {
    let usdc = {
      amount: 0,
      ui_amount: 0.0,
      coin: {
        logo: 'https://i.postimg.cc/NfhBL9n0/usdcoin.png',
        mint_address: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
        name: 'USD Coin',
      },
    }
    returnedTokens.push(usdc)
  }
  return returnedTokens
}

export const calculateMoneyNfts = moneyNFTs => {
  console.log(collections)
  let balance = 0
  for (let i = 0; i < moneyNFTs.length; i++) {
    for (let j = 0; j < collections.length; j++) {
      console.log(collections[j].name.substring(0, 15) + '-' + moneyNFTs[i].type.substring(0, 15) + '-')
      if (collections[j].name.substring(0, 15) == moneyNFTs[i].type.substring(0, 15)) {
        console.log('here')
        balance += collections[j].currentFloorPrice
      }
    }
  }
  console.log(balance)
  setCombinedMoneyFloor(balance)
}

export const calculateCombineFP = collections => {
  let combinedFP = 0
  collections.forEach(c => {
    if (c.name == ' Money Boys') {
      let marketCap = c.currentFloorPrice
      combinedFP += marketCap
    } else {
      let marketCap = c.currentFloorPrice / 2
      combinedFP += marketCap
    }
  })
  let combinedMarketCap = numberWithCommas((combinedFP * coins[1].price * 4444).toFixed(1))
  setCombinedMC(combinedMarketCap)
  setCombinedFP(combinedFP.toFixed(2))
}
const handleClose = () => {
  setOpen(false)
}
