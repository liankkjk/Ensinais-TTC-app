// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOf6Fyk5yMsySbuFjznx26iajGfksNVg4",
  authDomain: "ensinais-tcc.firebaseapp.com",
  projectId: "ensinais-tcc",
  storageBucket: "ensinais-tcc.firebasestorage.app",
  messagingSenderId: "456086389243",
  appId: "1:456086389243:web:15f2c7a1f1cf89120c4b5e",
  measurementId: "G-VVNQRBKPKP"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);