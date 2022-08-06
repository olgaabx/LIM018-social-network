// Configuración de Firebase de nuestra app web
// Import the functions you need from the SDKs you need
// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth,
  // eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';

// CONECCION CON FIRESTORE
// eslint-disable-next-line import/no-unresolved
import {
  getFirestore,
  collection, addDoc, getDocs, onSnapshot,
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyCXAg_voKSRdYd9wz7is6D7swSA2WohWNM',
  authDomain: 'helptech-ee39a.firebaseapp.com',
  projectId: 'helptech-ee39a',
  storageBucket: 'helptech-ee39a.appspot.com',
  messagingSenderId: '1073533036524',
  appId: '1:1073533036524:web:92c85a998419351bfc82c9',
  measurementId: 'G-CKRRSM6G1W',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const provider = new GoogleAuthProvider();
// const provider = new GoogleAuthProvider();
// console.log(auth);
// export const dataBase = getFirestore(app);
// console.log(dataBase);
const dataBase = getFirestore();

export {
  app,
  auth,
  dataBase,
  initializeApp,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
};

// COSAS QUE TODAVIA NO USAMOS,

// export const userLogin = (email, password) => signInWithEmailAndPassword(email, password);

// export const signInWithGmail = () => signInWithPopup(auth, provider);

// export const emailVerification = () => sendEmailVerification(auth.currentUser);