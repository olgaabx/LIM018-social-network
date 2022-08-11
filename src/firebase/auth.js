import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  auth,
  GoogleAuthProvider,
  signInWithPopup,
} from './config.js';

// eslint-disable-next-line max-len
export const userRegister = (email, password) => {
  const unaPromesa = createUserWithEmailAndPassword(auth, email, password);
  return unaPromesa;
};

export const userLogin = (email, password) => signInWithEmailAndPassword(auth, email, password);

// SingIn con GMAIL
const provider = new GoogleAuthProvider();

export const signInWithGmail = () => signInWithPopup(auth, provider);

export const currentUser = () => auth.currentUser;

// export const emailVerification = () => sendEmailVerification(auth.currentUser);
