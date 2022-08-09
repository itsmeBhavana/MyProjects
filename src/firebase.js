import firebase from 'firebase/compat/app';
//import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({

  apiKey: "AIzaSyCBNz0SehrzBaSvFUZaiG76VtYaaWQgzKA",
  authDomain: "messenger-clone-5d255.firebaseapp.com",
  databaseURL: "https://messenger-clone-5d255.firebaseio.com",
  projectId: "messenger-clone-5d255",
  storageBucket: "messenger-clone-5d255.appspot.com",
  messagingSenderId: "338552543779",
  appId: "1:338552543779:web:08357cff280af01aba2f96",
  measurementId: "G-F71BHWF3FE"

});

const db = firebaseApp.firestore();

export default db; 