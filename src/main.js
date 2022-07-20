import { changeview } from './viewControler/index.js';

const init = () => {
  window.addEventListener('hashchange', () => changeview(window.location.hash));
};

window.addEventListener('load', init);
