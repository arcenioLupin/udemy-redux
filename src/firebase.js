import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyC52u_PmBGNX1W3D4WOJAp4Bgd7dEomnw8",
    authDomain: "crud-react-udemy-364f9.firebaseapp.com",
    databaseURL: "https://crud-react-udemy-364f9-default-rtdb.firebaseio.com",
    projectId: "crud-react-udemy-364f9",
    storageBucket: "crud-react-udemy-364f9.appspot.com",
    messagingSenderId: "41684880156",
    appId: "1:41684880156:web:e97a6cc2f423b0723c08d9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()
  const db = firebase.firestore()

  export {auth,firebase,db}