import { components } from '../components/index.js';

const changeview = (router) => {
  const container = document.getElementById('container');
  switch (router) {
    case '#/':
    { return container.appendChild(components.home()); }
    case '#/Publicar':
    { return container.appendChild(components.publicar()); }
    case '#/grupos':
    { return container.appendChild(components.grupos()); }
    default:
      break;
  }
  return console.log(router);
};

export { changeview };
