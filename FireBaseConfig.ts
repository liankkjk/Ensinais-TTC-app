import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCOf6Fyk5yMsySbuFjznx26iajGfksNVg4",
  authDomain: "ensinais-tcc.firebaseapp.com",
  projectId: "ensinais-tcc",
  storageBucket: "ensinais-tcc.firebasestorage.app",
  messagingSenderId: "456086389243",
  appId: "1:456086389243:web:15f2c7a1f1cf89120c4b5e",
  measurementId: "G-VVNQRBKPKP"
};

const FIREBASE_APP = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

let FIREBASE_AUTH;
try {
  FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} catch (e) {
  FIREBASE_AUTH = getAuth(FIREBASE_APP);
}

export { FIREBASE_APP, FIREBASE_AUTH };