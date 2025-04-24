import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCOf6Fyk5yMsySbuFjznx26iajGfksNVg4",
  authDomain: "ensinais-tcc.firebaseapp.com",
  projectId: "ensinais-tcc",
  storageBucket: "ensinais-tcc.appspot.com",
  messagingSenderId: "456086389243",
  appId: "1:456086389243:web:15f2c7a1f1cf89120c4b5e",
  measurementId: "G-VVNQRBKPKP"
};

// Inicializa o app Firebase
const FIREBASE_APP = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Inicializa a autenticação com persistência local
let FIREBASE_AUTH;
try {
  FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} catch (e) {
  FIREBASE_AUTH = getAuth(FIREBASE_APP);
}

// Inicializa o Firestore (banco de dados)
const FIREBASE_DB = getFirestore(FIREBASE_APP);

export { FIREBASE_APP, FIREBASE_AUTH, FIREBASE_DB };


/*{
  "nome": "Lara",
  "foto": "https://...imagem",
  "expAtual": 80,
  "expMaxima": 200
}
 ter isso no usuario do banco de dados*/ 
