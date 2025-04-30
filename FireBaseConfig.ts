import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import { getFirestore, collection, addDoc, doc, setDoc, deleteDoc, getDoc } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
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

const FIREBASE_DB = getFirestore(FIREBASE_APP);

const FIREBASE_STORAGE = getStorage(FIREBASE_APP);


// addDoc(collection(FIREBASE_DB, "Usuários"), {  //ctr + k + ctrl + U (descomenta o código) ctr + k + ctrl + C(comenta o código)
//   email: "admin@gmail.com",
//   nickname: "admin123",
//   nivel: 1,
//   exp: 199,
// });

// setDoc(doc(FIREBASE_DB, "Usuários", "JKT4JCKZQhdsnAYFuuvY"), {
//   email: "enzolian41@gmail.com",
//   nickname: "liankkjk",
//   nivel: 1,
//   exp: 199,
// }, {merge:true});  //adiciona valor num doc do firestore

// const docRef = doc(FIREBASE_DB, "Usuários", "TBu01VDmEbXQhlOPbVP3"); //id para apagar doc

// const docRef = doc(FIREBASE_DB, "Usuários", "JKT4JCKZQhdsnAYFuuvY");

// async function showDocData() {
//   const docSnap = await getDoc(docRef);
//   console.log(docSnap.data());
// }

// showDocData(); // chama a função

// deleteDoc(docRef);

export { FIREBASE_APP, FIREBASE_AUTH, FIREBASE_DB, FIREBASE_STORAGE }; 
