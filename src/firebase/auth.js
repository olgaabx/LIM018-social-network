import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  auth,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  getAuth,
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
// Usuario actual
export const currentUser = () => auth.currentUser;

// export const emailVerification = () => sendEmailVerification(auth.currentUser);

export const getCurrentUserName = () => {
  // if(auth.currentUser.displayName === null &&  )

  // if (user.providerId === 'firebase') {
  //   // traernos el documetn de la coleccion de users donde el
  //   // return el name
  // }

  // if (user.providerId === 'google.com') {
  //   return user.displayName;
  // }

  // return 'pepito';
};


export const updateDisplayName = (name) => {
  updateProfile(
    auth.currentUser,
    {
      displayName: name,
    },
  )
    .then(() => {
    // Profile updated!
    // ...
    })
    .catch((error) => {
    // An error occurred
    // ...
    });
};
