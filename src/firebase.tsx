import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAn_kBtvc3kVQP9YPh41KOEEz4ZU83icTs",
    authDomain: "netflix-ts-5f24a.firebaseapp.com",
    projectId: "netflix-ts-5f24a",
    storageBucket: "netflix-ts-5f24a.appspot.com",
    messagingSenderId: "144660000646",
    appId: "1:144660000646:web:356cf46000cd1e438f8607"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const db = firebaseApp.firestore()

export { auth, db };