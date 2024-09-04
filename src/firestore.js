// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3jEwsAQrj4eAhBrw5xUJ7ygMsV82HaZI",
  authDomain: "family-tree-app-2002b.firebaseapp.com",
  projectId: "family-tree-app-2002b",
  storageBucket: "family-tree-app-2002b.appspot.com",
  messagingSenderId: "255486358790",
  appId: "1:255486358790:web:44188cac69d224c1d29a87",
  measurementId: "G-XWQHCV6N2W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });