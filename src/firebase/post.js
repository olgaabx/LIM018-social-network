import {
  addDoc, collection, dataBase, onSnapshot, deleteDoc, doc, updateDoc, setDoc,
} from './config.js';
// deleteDoc, doc,
export const savePost = async (description, userId) => {
  await addDoc(collection(dataBase, 'posts'), { description, userId });
};
export const usersCollection = (userId, name, email) => {
  setDoc(doc(dataBase, 'users', userId), { userId, name, email });
};

// FUNCION PARA TRAER INFOR DE FIRESTORE // getDoc (te trae los archivos desde el firestore)
// Trae con getDoc la collecion indicada
// export const getTask = () => getDocs(collection(dataBase, 'posts'));
// Borrar post
// export const deleteNote = (idPost) => {
//   delete( collection(dataBase,'posts').doc(idPost))};

// cons por lo general empeiazan por ON
export const OngetTask = (callback) => onSnapshot(collection(dataBase, 'posts'), callback);

// const para borrar los post // con doc ya no traigo toda una coleccion sino solo un documento
export const deletePost = async (id) => {
  console.log(id);
  const borrar = await deleteDoc(doc(dataBase, 'posts', id));
  console.log(borrar);
};
// deleteDoc(doc(dataBase, 'posts'), id);

// Likes de Posts
export const postLikes = async (idPost, dataLikes) => {
  const docId = doc(dataBase, 'posts', idPost);
  await updateDoc(docId, {
    likes: dataLikes,
  });
};
