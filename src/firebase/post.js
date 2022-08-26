import {
  addDoc,
  collection,
  dataBase,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
  setDoc,
  orderBy,
  query,
  serverTimestamp,
  getDoc,
} from './config.js';
// deleteDoc, doc,

// COLECCIÓN PARA LA CREACIÓN DE POSTS
export const savePost = async (description, userId) => {
  await addDoc(collection(dataBase, 'posts'), {
    description,
    userId,
    datePost: serverTimestamp(), // FECHA DE LA PUBLICACIÓN
  });
};

// Creando colección de usuarios, falta jalar name
export const usersCollection = (userId, name, email) => {
  setDoc(doc(dataBase, 'users', userId), { userId, name, email });
};

// FUNCIÓN PARA ORDENAR LOS POST
// export const orderByDate = query(collection(dataBase, 'posts'), orderBy('datePost', 'desc'));

// elimina los post - ACTUALIZA LA INFORMACION EN TIEMPO REAL DE POST -
export const onGetPost = (callback) => {
  const queryPost = query(collection(dataBase, 'posts'), orderBy('datePost', 'desc'));
  onSnapshot(queryPost, callback);
};

// Const para borrar los post- con (doc) ya no traigo toda una coleccion sino solo un documento
export const deletePost = (idPost) => {
  // console.log(idPost);
  deleteDoc(doc(dataBase, 'posts', idPost));
  // console.log(deleteDoc());
};
// Actualizar Posts
export const updatePost = (idPost, postDescription) => {
  updateDoc(doc(dataBase, 'posts', idPost), {
    posts: postDescription,
  });
};

// Likes de Posts
export const postLikes = async (idPost, dataLikes) => {
  await updateDoc(doc(dataBase, 'posts', idPost), {
    likes: dataLikes,
  });
};
// Obteniendo Id de un post
export const getPost = (idPost) => getDoc(doc(dataBase, 'posts', idPost));
