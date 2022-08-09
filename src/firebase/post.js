import {
  addDoc, collection, dataBase, onSnapshot, deleteDoc, doc,
} from './config.js';

export const savePost = (description) => {
  addDoc(collection(dataBase, 'posts'), { description });
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
export const deletePost = (id) => console.log(id);
// deleteDoc(doc(dataBase, 'posts'), id);
