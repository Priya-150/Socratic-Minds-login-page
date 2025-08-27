import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, RecaptchaVerifier, signInWithPhoneNumber, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyBi-xLuSsTKNcy4zIbx1IlX5GQA1HJwR-s",
  authDomain: "socratic-minds.firebaseapp.com",
  projectId: "socratic-minds",
  storageBucket: "socratic-minds.firebasestorage.app",
  messagingSenderId: "620828589787",
  appId: "1:620828589787:web:afa80c8ea217b6fa5196fe",
  measurementId: "G-CRDHJX5H90"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


export { auth, googleProvider, signInWithPopup, signOut, RecaptchaVerifier, signInWithPhoneNumber, signInWithEmailAndPassword, createUserWithEmailAndPassword };
