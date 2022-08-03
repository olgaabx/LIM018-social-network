import {
  createUserWithEmailAndPassword,
  auth,
  signInWithEmailAndPassword,
} from './config';

// eslint-disable-next-line max-len
export const userRegister = (email, password) => {
  const unaPromesa = createUserWithEmailAndPassword(auth, email, password);
  return unaPromesa;
};

export const userLogin = (email, password) => signInWithEmailAndPassword(auth, email, password);

// export const signInWithGmail = () => signInWithPopup(auth, provider);

// export const emailVerification = () => sendEmailVerification(auth.currentUser);
