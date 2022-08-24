import {
  addDoc,
  collection,
  dataBase,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
  setDoc,
  Timestamp,
  orderBy,
  query,
} from './config.js';
// deleteDoc, doc,

// CREACION DE POSTS
export const savePost = async (description, userId) => {
  await addDoc(collection(dataBase, 'posts'), {
    description,
    userId,
    datePost: Timestamp.fromDate(new Date()),
  });
};

// export const savePost2 = ()

// Creando colección de usuarios, falta jalar name
export const usersCollection = (userId, name, email) => {
  setDoc(doc(dataBase, 'users', userId), { userId, name, email });
};

// FUNCIÓN PARA ORDENAR LOS POST
// export const q = query(collection(dataBase, 'posts'), orderBy('datePost', 'desc'));

// elimina los post - ACTUALIZA LA INFORMACION EN TIEMPO REAL DE POST -
export const onGetPost = (callback) => onSnapshot(collection(dataBase, 'posts'), callback);

//
// Const para borrar los post- con (doc) ya no traigo toda una coleccion sino solo un documento
export const deletePost = (idPost) => {
  // console.log(idPost);
  deleteDoc(doc(dataBase, 'posts', idPost));
  // console.log(deleteDoc());
};

// Likes de Posts
export const postLikes = async (idPost, dataLikes) => {
  const docId = doc(dataBase, 'posts', idPost);
  await updateDoc(docId, {
    likes: dataLikes,
  });
};
