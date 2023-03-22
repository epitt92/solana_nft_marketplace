import { collection, doc, getDocs, getFirestore, onSnapshot, query, setDoc, where } from 'firebase/firestore'

export const addUserToFirestore = async wallet => {
  const db = getFirestore()
  let newUser = { wallet }
  await localStorage.setItem('userWallet', JSON.stringify(newUser))
  await setDoc(doc(db, 'wallet_users', wallet), {
    wallet: wallet,
    username: null,
    createdAt: Date.now(),
    profilePicture: null,
    banner: null,
    following: [],
    followers: [],
    rewards: [],
    items: [],
    config: { darkMode: true },
  })
    .then(() => {
      console.log('wallet profile successfully created! 🚀')
    })
    .catch(error => {
      console.error('Error creating wallet profile ', error)
    })
}
