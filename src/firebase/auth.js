import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  auth,
  GoogleAuthProvider,
  signInWithPopup,
  // updateProfile,
  dataBase,
  query,
  where,
  collection,
  getDocs,
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

// Usuario actual
export const currentUser = () => auth.currentUser;

// TODO: averiguar si puedo hacer un query para traerme un solo documento
export const getUserByUserId = (postUserId) => getDocs(query(collection(dataBase, 'users'), where('userId', '==', postUserId)));

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
