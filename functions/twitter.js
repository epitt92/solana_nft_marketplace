const https = require('https')
const functions = require('firebase-functions')
var BEAR = process.env.BEAR
var axios = require('axios')

//get tweets from user

exports.getTweets = functions.https.onCall(async (data, context) => {
  const userID = data.userID
  var config = {
    method: 'get',
    url: `https://api.twitter.com/2/users/${userID}/tweets/?media.fields=url,preview_image_url,type,width,height&exclude=replies,retweets&tweet.fields=attachments,created_at&user.fields=name,profile_image_url,username&expansions=attachments.media_keys,author_id&max_results=15`,
    headers: {
      Authorization: BEAR,
      Cookie: 'guest_id=v1%3A166968160186048007',
    },
  }
  const user = await axios(config)
    .then(function (response) {
      return { data: response.data }
    })
    .catch(function (error) {
      return { error: error }
    })

  return { data: user }
})
