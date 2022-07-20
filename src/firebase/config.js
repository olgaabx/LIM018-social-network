// Configuración de Firebase de nuestra app web
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
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
const analytics = getAnalytics(app);
