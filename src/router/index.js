import { logIn } from '../components/login.js';
import { register } from '../components/register.js';
import { mainpage } from '../components/principal.js';

export const changeview = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '':
    case '#/inicio':
      container.appendChild(mainpage(logIn()));
      break;
    case '#/registro':
      container.appendChild(mainpage(register()));
      break;
    default:
      container.innerHTML = 'Página No Encontrada';
      break;
  }
};
