import { collection, doc, getDocs, getFirestore, onSnapshot, query, setDoc, where } from 'firebase/firestore'

// Add User to firestor

export const addUserToServer = async wallet => {
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

// Check if user exists in firestore

export const checkUser = async wallet => {
  const db = await getFirestore()
  const collectionR = collection(db, 'wallet_users')
  const q = query(collectionR, where('wallet', '==', wallet))
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach(async doc => {
    if (doc.data()) {
      let newUser = { wallet }
      await localStorage.setItem('userWallet', JSON.stringify(newUser))
      return false
    }
  })
  return true
}
