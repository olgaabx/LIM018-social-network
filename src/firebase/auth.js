import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  auth,
  signInWithPopup,
} from './config.js';

// eslint-disable-next-line max-len
export const userRegister = (email, password) => {
  const unaPromesa = createUserWithEmailAndPassword(auth, email, password);
  return unaPromesa;
};

export const userLogin = (email, password) => signInWithEmailAndPassword(auth, email, password);

// SingIn con GMAIL
export const signInWithGmail = (provider) => signInWithPopup(auth, provider);

// export const emailVerification = () => sendEmailVerification(auth.currentUser);
