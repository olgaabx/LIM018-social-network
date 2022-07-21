import { changeview } from './router/index.js';

const init = () => {
  window.addEventListener('hashchange', () => changeview(window.location.hash));
};

window.addEventListener('load', init);
