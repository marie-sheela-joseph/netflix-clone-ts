import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const firebaseConfig = {
    apiKey: "AIzaSyBsXFTS4GAKxF1DtPICYEMzSBD6n5wU_UQ",
    authDomain: "netflix-clone-ce98c.firebaseapp.com",
    projectId: "netflix-clone-ce98c",
    storageBucket: "netflix-clone-ce98c.appspot.com",
    messagingSenderId: "940276020103",
    appId: "1:940276020103:web:24f4c71ceec9211d1b9922"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const db = firebaseApp.firestore()

export { auth, db };