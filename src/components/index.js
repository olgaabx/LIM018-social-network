import { logIn } from './login.js';
import { mainpage } from './principal.js';
import { register } from './register.js';
import { homePage } from './home.js';
const components = {
  Login: logIn,
  Mainpage: mainpage,
  Register: register,
  Home: homePage,
};

export { components };
