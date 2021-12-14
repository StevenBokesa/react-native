// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6hNansGjbRj98ccHczZUhSEX88WjeoMA",
  authDomain: "society-f0d2a.firebaseapp.com",
  projectId: "society-f0d2a",
  storageBucket: "society-f0d2a.appspot.com",
  messagingSenderId: "37936544322",
  appId: "1:37936544322:web:22f6a28829fc24721b0bdb"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}


const db = app.firestore();
const auth = firebase.auth();

export { db, auth };