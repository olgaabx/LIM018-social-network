import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  auth,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
  // updateProfile,
  dataBase,
  // query,
  // where,
  // collection,
  getDoc,
  doc,
} from './config.js';

// eslint-disable-next-line max-len
// REGISTRAMOS
export const userRegister = (email, password) => {
  const unaPromesa = createUserWithEmailAndPassword(auth, email, password);
  return unaPromesa;
};
// LOGUEAMOS
export const userLogin = (email, password) => signInWithEmailAndPassword(auth, email, password);

// SingIn con GMAIL
const provider = new GoogleAuthProvider();
export const signInWithGmail = () => signInWithPopup(auth, provider);

// Usuario actual, Si no accedió ningún usuario, el valor de currentUser es nulo
export const currentUser = () => auth.currentUser;

export const emailVerification = () => sendEmailVerification(auth.currentUser);

// postUserId es el ID del usuario que creó el post
export function getUserById(postUserId) {
  const docRef = doc(dataBase, 'users', postUserId);
  return getDoc(docRef);
}
