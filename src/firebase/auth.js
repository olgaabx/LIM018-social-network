import { async } from 'regenerator-runtime';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  auth,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from './config.js';

// eslint-disable-next-line max-len
// REGISTRAR USAURIO
export const userRegister = (email, password) => {
  const unaPromesa = createUserWithEmailAndPassword(auth, email, password);
  return unaPromesa;
};
export const userLogin = (email, password) => signInWithEmailAndPassword(auth, email, password);

// SingIn con GMAIL
const provider = new GoogleAuthProvider();

export const signInWithGmail = () => signInWithPopup(auth, provider);
// Usuario actual
export const currentUser = () => {
  if (auth.currentuser.displayname === null) {
    return auth.currentUser;
  }
};

// pruebas stefani
// export const pruebas = (displayName, photoURL) => {
//   updateProfile(auth.currentUser, { displayName, photoURL });
// };
// export const emailVerification = () => sendEmailVerification(auth.currentUser);
