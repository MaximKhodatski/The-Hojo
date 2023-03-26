import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDvK2yG74WnWDiixff5XVSvn7W0DAxmR_Y",
  authDomain: "my-money-tracker-e5db9.firebaseapp.com",
  projectId: "my-money-tracker-e5db9",
  storageBucket: "my-money-tracker-e5db9.appspot.com",
  messagingSenderId: "118314630024",
  appId: "1:118314630024:web:c3417c4750e574ce56983d"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp 
const timestamp = firebase.firestore.Timestamp 

export { projectFirestore, projectAuth, timestamp }