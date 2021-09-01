import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCU8NPTTvCTE_AmdEZEocUltwPVzHdYFoA",
    authDomain: "pokemon-react-3e476.firebaseapp.com",
    databaseURL: "https://pokemon-react-3e476-default-rtdb.firebaseio.com",
    projectId: "pokemon-react-3e476",
    storageBucket: "pokemon-react-3e476.appspot.com",
    messagingSenderId: "1047811429198",
    appId: "1:1047811429198:web:fbfe13a5e55e1d7551c41f",
    measurementId: "G-6E1X71NZ58"
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const db = firebase.firestore()
export const storageRef = firebase.storage().ref();

export default firebase