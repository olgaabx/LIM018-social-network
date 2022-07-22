import { components } from '../components/index.js';
import register from '../components/register.js';

const changeview = (router) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (router) {
    case '#/':
    { return container.appendChild(components.logIn(register)); }
    // { return container.appendChild(components.home()); }
    case '#/Register':
    { return container.appendChild(components.publicar()); }
    // case '#/grupos':
    // { return container.appendChild(components.grupo()); }
    default:
      break;
  }
  return console.log(router);
};

export { changeview };
