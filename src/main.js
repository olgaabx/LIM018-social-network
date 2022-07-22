import { changeview } from './router/rutas.js';

const init = () => {
  changeview(window.location.hash.toLocaleLowerCase());
  window.addEventListener('hashchange', () => changeview(window.location.hash));
};

window.addEventListener('load', init);
