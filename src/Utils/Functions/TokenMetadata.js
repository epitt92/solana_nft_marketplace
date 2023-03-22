// add metadata to token, given mint address
export const addTokenMetadata = async (tokenList, userTokens, nativeBalance) => {
  let tokensWithMetadata = []
  for (let i = 0; i < tokenList.length; i++) {
    let token = tokenList[i]
    for (let j = 0; j < userTokens.length; j++) {
      let mint = userTokens[j]
      if (token.address === mint.mint) {
        let tokenWithMetadata = mint
        tokenWithMetadata.metadata = token
        tokensWithMetadata.push(tokenWithMetadata)
      }
    }
  }

  let sol = {
    amount: nativeBalance,
    decimals: 9,
    mint: '',
    metadata: {
      name: 'Solana',
      symbol: 'SOL',
      logoURI: 'https://www.pngall.com/wp-content/uploads/10/Solana-Crypto-Logo-PNG-File.png',
      extensions: {
        coingeckoId: 'solana',
      },
    },
  }
  tokensWithMetadata.unshift(sol)
  return tokensWithMetadata
}
