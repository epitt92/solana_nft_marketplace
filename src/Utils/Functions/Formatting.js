export const twoDecimals = num => {
  return Math.round((num + Number.EPSILON) * 100) / 100
}

export const timeToHoursMinutes = timeStamp => {
  // compute diff in ms
  let diffInMilliSeconds = Math.abs(Date.now() - timeStamp)
  // console.log(`diffInMilliSeconds: ${diffInMilliSeconds}`);
  // compute the number of hours that has passed, rounding down
  const hours = Math.floor((diffInMilliSeconds / (1000 * 60 * 60)) % 24)
  // get the remainder on the number of hours that has passed, in minutes
  const minutes = Math.floor((diffInMilliSeconds / (1000 * 60)) % 60)
  // console.log(`hours: ${hours}`);
  // console.log(`minutes: ${minutes}`);
  let hoursPart = hours > 0 ? hours + (hours === 1 ? ' hour' : ' hours') : ''
  let minutesPart = minutes > 0 ? minutes + (minutes === 1 ? ' minute' : ' minutes') : ''
  let middlePart = hoursPart && minutesPart ? ', ' : ''
  // console.log(`hoursPart: ${hoursPart}`);
  // console.log(`minutesPart: ${minutesPart}`);
  // console.log(`middlePart: ${middlePart}`);
  const humanReadableTime = hoursPart + middlePart + minutesPart
  return { humanReadableTime, diffInMilliSeconds }
}

export function numberWithCommas(x) {
  if (x < 1) {
    return x
  }
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const computeTotalCoinBalance = coins => {
  let balance = null
  if (coins) {
    coins.forEach(coin => {
      if (coin.price) {
        balance += coin.price * coin.user.ui_amount
      }
    })
  }
  return balance
}
