// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const home = () => {
  const homeDiv = document.createElement('div');
  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');
  const inputMail = document.createElement('input');
  const inputPassword = document.createElement('input');

  buttonRegister.textContent = 'Registrate';
  buttonLogin.textContent = 'Inicia sesión';
  inputMail.placeholder = 'correo electronico';
  inputPassword.placeholder = 'Ingresa tu contraseña';

  homeDiv.classList.add = 'homeContainer';

  buttonRegister.addEventListener('click', () => onNavigate('/register'));

  homeDiv.appendChild(inputMail);
  homeDiv.appendChild(inputPassword);
  homeDiv.appendChild(buttonLogin);
  homeDiv.appendChild(buttonRegister);

  return homeDiv;
};
