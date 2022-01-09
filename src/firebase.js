// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgrYL7hD_QARtk1wAD40zMlQwcIZIGxns",
  authDomain: "linkedin-clone-dc7f9.firebaseapp.com",
  projectId: "linkedin-clone-dc7f9",
  storageBucket: "linkedin-clone-dc7f9.appspot.com",
  messagingSenderId: "487488607406",
  appId: "1:487488607406:web:6be276e58a20714a36493f"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, storage, auth, provider }; 
