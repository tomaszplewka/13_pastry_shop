import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA0LWbajB04sk0K4KCSNCcypPfAca7gs4c",
    authDomain: "pastry-shop666.firebaseapp.com",
    projectId: "pastry-shop666",
    storageBucket: "pastry-shop666.appspot.com",
    messagingSenderId: "886866758690",
    appId: "1:886866758690:web:8e9e218b9fecbda73b0e7b"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new auth.GoogleAuthProvider();
provider.setCustomParameters({ 'propmt': 'select_account' });

export const signInGoogle = () => auth.signInWithPopup(provider);

export default firebase;
