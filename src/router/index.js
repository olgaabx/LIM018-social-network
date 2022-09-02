// import { logIn, signUpPage } from '../components/login.js';
// import { register, addSignUpEvents } from '../components/register.js';
// import { mainpage } from '../components/principal.js';
// import { homePage, addHomePageEvents } from '../components/home.js';
import { components } from '../components/index.js';

export const changeview = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '':
      container.appendChild(components.Login());
      components.SignIn();
      components.SingInGmail();
      break;
    case '#/registro':
      container.appendChild(components.Register());
      components.AddSignUpEvents();
      break;
    case '#/inicio':
      container.appendChild(components.Login());
      // components.SignUp(); // no sabemos para qué lo estábamos usando
      break;
    case '#/home':
      container.appendChild(components.Home());
      components.AddHomePageEvents();
      components.Getposts();
      components.ScrollHome();
      break;
    default:
      container.innerHTML = 'Página No Encontrada';
      break;
  }
};
