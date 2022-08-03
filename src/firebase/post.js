import { addDoc, collection, dataBase } from './config.js';

export const savePost = (title, description) => {
  addDoc(collection(dataBase, 'posts'), { title, description });
};
