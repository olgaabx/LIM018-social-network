import { logIn } from '../components/login.js';
import { register } from '../components/register.js';
import { home } from '../components/home.js';

export const changeview = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '':
    case '#/inicio':
      container.appendChild(home(logIn()));
      break;
    case '#/registro':
      container.appendChild(home(register()));
      break;
    default:
      container.innerHTML = 'Página No Encontrada';
      break;
  }
};
