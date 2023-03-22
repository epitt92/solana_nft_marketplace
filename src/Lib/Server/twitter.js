import { getFunctions, httpsCallable } from 'firebase/functions'

// functions for getting twitter data from server

export const getProjectTweets = async userID => {
  try {
    const functions = getFunctions()
    var getTweets = await httpsCallable(functions, 'getTweets')
    let res = await getTweets({ userID: userID })

    let data = res.data.data.data

    //attach media to tweets;

    let tweets = data.data
    if (tweets && data.includes && data.includes.media) {
      let media = data.includes.media
      let users = data.includes.users
      for (let i = 0; i < tweets.length; i++) {
        tweets[i].user = users[0]
        for (let j = 0; j < media.length; j++) {
          if (
            tweets[i].attachments !== undefined &&
            tweets[i].attachments.media_keys &&
            tweets[i].attachments.media_keys[0] === media[j].media_key
          ) {
            tweets[i].media = media[j]
          }
        }
      }
    }

    return { data: res, tweets: tweets }
  } catch (error) {
    console.log('error pulling tweets', error)
    return { error: error }
  }
}
