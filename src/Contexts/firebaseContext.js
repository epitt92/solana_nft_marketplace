import { createContext, useContext } from 'react'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getDatabase } from 'firebase/database'
import { getStorage } from 'firebase/storage'
import { getFunctions } from 'firebase/functions'

const firebaseConfig = {
  apiKey: 'AIzaSyD1eQZv17QtuQNo9prZbLMnAMgxB_SNQ2M',
  authDomain: 'slash-fb34a.firebaseapp.com',
  projectId: 'slash-fb34a',
  storageBucket: 'slash-fb34a.appspot.com',
  messagingSenderId: '11522617686',
  appId: '1:11522617686:web:d3502be92a86b1e8dea6f7',
  measurementId: 'G-ET7N7K0J7D',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

export const FirebaseContext = createContext(null)
export const useFirebaseContext = () => useContext(FirebaseContext)

const FirebaseContextProvider = ({ children }) => {
  return (
    <FirebaseContext.Provider
      value={{
        auth: getAuth(app),
        db: getDatabase(app),
        firestore: getFirestore(app),
        storage: getStorage(app),
        functions: getFunctions(app),
        analytics: getAnalytics(app),
      }}
    >
      {children}
    </FirebaseContext.Provider>
  )
}

export default FirebaseContextProvider
