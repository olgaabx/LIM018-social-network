import { addDoc, collection, dataBase } from './config';

export const savePost = (title, description) => {
  addDoc(collection(dataBase, 'posts'), { title, description });
};
