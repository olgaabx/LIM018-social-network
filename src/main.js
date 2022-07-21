// eslint-disable-next-line import/no-cycle
import { home } from './components/home.js';
// eslint-disable-next-line import/no-cycle
import { register } from './components/register.js';
import { login } from './components/login.js';

const containerDiv = document.getElementById('container');

const routes = {
  '/': home,
  '/register': register,
  '/login': login,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    // verificar la diferencia entre pushState(agrega un state, se puede volver atras) ,
    // replacestatte(reemplaza el state y no se puede volver atras)
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (containerDiv.firstChild) {
    containerDiv.removeChild(containerDiv.firstChild);
  }
  containerDiv.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];

window.onpopstate = () => {
  containerDiv.appendChild(component());
};

// es una forma en como obetener la ruta en donde estamos
containerDiv.appendChild(component());
