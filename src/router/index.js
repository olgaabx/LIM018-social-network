import { components } from '../components/index.js';

const changeview = (router) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (router) {
    case '#/':
    { return container.appendChild(components.logIn()); }
    // { return container.appendChild(components.home()); }
    case '#/Publicar':
    { return container.appendChild(components.publicar()); }
    // case '#/grupos':
    // { return container.appendChild(components.grupo()); }
    default:
      break;
  }
  return console.log(router);
};

export { changeview };
