import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBgq1cYi8iGF9x75khr4AxPU9e2XIZfJCA",
  authDomain: "challenge-93fb6.firebaseapp.com",
  databaseURL: "https://challenge-93fb6.firebaseio.com",
  projectId: "challenge-93fb6",
  storageBucket: "challenge-93fb6.appspot.com",
  messagingSenderId: "750471619780",
  appId: "1:750471619780:web:cf8e9a67e3d623ae9b1591",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
