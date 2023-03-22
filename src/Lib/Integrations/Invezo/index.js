// Register a wallet for tracking with Invezo
export async function registerWallet(wallet) {
  let res
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'React POST Request Example' }),
  }
  return await fetch(`http://localhost:3000/api/invezo/${wallet}?type=register`, requestOptions)
    .then(response => response.json())
    .then(data => {
      res = data
      console.log(data)
      return res
    })
}

// Get current holdings of a wallet address.
export async function getHoldings(wallet) {
  let res
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }
  return await fetch(`http://localhost:3000/api/invezo/${wallet}?type=holdings`, requestOptions)
    .then(response => response.json())
    .then(data => {
      res = data
      console.log(data)
      return res
    })
}

//Get balance in USD of a wallet address over a specified time period.
export async function getPriceHistory(wallet, interval) {
  let res
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }
  return await fetch(
    `http://localhost:3000/api/invezo/${wallet}?type=pricehistory&interval=${interval}`,
    requestOptions,
  )
    .then(response => response.json())
    .then(data => {
      res = data
      console.log(data)
      return res
    })
}
