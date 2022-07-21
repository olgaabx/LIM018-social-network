// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const register = () => {
  const registerDiv = document.createElement('div');
  registerDiv.textContent = 'Bienvenido al registro';
  const buttonComeback = document.createElement('button');
  buttonComeback.textContent = 'Regresar';

  buttonComeback.addEventListener('click', () => onNavigate('/'));
  registerDiv.appendChild(buttonComeback);

  return registerDiv;
};
