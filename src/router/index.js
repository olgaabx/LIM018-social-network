import { components } from '../components/index.js';
import { logIn } from '../components/login.js';

export const changeview = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '':
    case '#/inicio':
      container.appendChild(components.Home(logIn()));
      break;
    default:
      container.innerHTML = 'Página No Encontrada';
      break;
  }
};
