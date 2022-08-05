import { addDoc, collection, dataBase, getDocs } from './config.js';

export const savePost = (title, description) => {
  addDoc(collection(dataBase, 'posts'), { title, description });
};

// FUNCION PARA TRAER INFOR DE FIRESTORE // getDoc (te trae los archivos desde el firestore)
// Trae con getDoc la collecion indicada
export const getTask = () => getDocs(collection(dataBase, 'posts'));
