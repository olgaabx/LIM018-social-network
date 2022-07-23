import { logIn } from '../components/login.js';
import { register } from '../components/register.js';
<<<<<<< HEAD
=======
import { home } from '../components/home.js';
>>>>>>> 3d67c45bd0f884e44db7a7d8f4592f45d84f3826

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
    case '#/registro':
      container.appendChild(components.Home(register()));
      break;
    default:
      container.innerHTML = 'Página No Encontrada';
      break;
  }
};
