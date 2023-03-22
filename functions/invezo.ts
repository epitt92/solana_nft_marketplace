// // // // //

const apikey = `S0yyye9Mzy4GRHpoy6xVJhridTgUUqTU`

export default async function handler(_req, res) {
  let query = _req.query
  let body = _req.body
  let wallet = query.pubkey
  if (_req.method === 'GET') {
    if (query.type == 'holdings') {
      //GET holdings associated with a wallet; must be registered.
      const response = await fetch(
        `https://api.invezo.com/v1/wallets/tracking/holdings?address=${wallet}&chain=sol&apikey=${apikey}`,
      )
      const json = await response.json()
      return res.json({
        status: 200,
        data: json,
        query: query,
      })
    }
    if (query.type == 'pricehistory') {
      //GET pricing history
      let wallet = query.pubkey
      let interval = query.interval

      const response = await fetch(
        `https://api.invezo.com/v1/wallets/tracking/balance?address=${wallet}&chain=sol&apikey=${apikey}&min=2020-08-25&max=2022-12-25&interval=${interval}`,
      )
      const json = await response.json()
      return res.json({
        status: 200,
        data: json,
        query: query,
      })
    }
  }
  if (_req.method === 'POST') {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ address: wallet, chain: 'sol' }),
    }

    if (query.type == 'register') {
      //Register wallet with invezo
      const response = await fetch(
        `https://api.invezo.com/v1/wallets/tracking/register?address=${wallet}&chain=sol&apikey=${apikey}`,
        requestOptions,
      )
      const json = await response.json()
      return res.json({
        status: 200,
        data: json,
        query: query,
      })
    }
    if (query.type == 'delete') {
      //Unregister wallet with invezo
    }
  } else {
    // Handle any other HTTP method
    return res.json({
      status: 200,
      data: { message: 'nothing to return, check query params' },
      query: query,
    })
  }
}
