import {
  addDoc, collection, dataBase, onSnapshot,
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
