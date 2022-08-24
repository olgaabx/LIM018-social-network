import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  auth,
  GoogleAuthProvider,
  signInWithPopup,
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

// Funcion para extraer  el id de User
export function getUserById(postUserId) {
  const docRef = doc(dataBase, 'users', postUserId);
  return getDoc(docRef);
}

// export const emailVerification = () => sendEmailVerification(auth.currentUser);
// CON FEÑA -------------------------------------------------------------------------
// export const updateDisplayName = (name) => {
//   updateProfile(auth.currentUser, {
//     displayName: name,
//   })
//     .then(() => {
//     // Profile updated!
//     // ...
//     })
//     .catch((error) => {
//     // An error occurred
//     // .../
//     });
// };
// CON DAVID ----------------------------------------------------------------------
// export const getCurrentUserName = () => {
// if(auth.currentUser.displayName === null &&  )
// if (user.providerId === 'firebase') {
//   // traernos el documetn de la coleccion de users donde el
//   // return el name
// }
// if (user.providerId === 'google.com') {
//   return user.displayName;
// }
// return 'pepito';
// };
// TODO: averiguar si puedo hacer un query para traerme un solo documento
// eslint-disable-next-line max-len
// export const getUserById = (postUserId) => getDoc(query(collection(dataBase, 'users'), where('userId', '==', postUserId)));
