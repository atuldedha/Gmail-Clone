// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD0wLzEFHg-L0A3trKsxlADW5XgW3eA0SI",
    authDomain: "clone-a4f9f.firebaseapp.com",
    projectId: "clone-a4f9f",
    storageBucket: "clone-a4f9f.appspot.com",
    messagingSenderId: "558038286509",
    appId: "1:558038286509:web:0cb31e8b6a3e13d571c624",
    measurementId: "G-KNZS4NJCYN"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export default db;

  export {auth, provider}