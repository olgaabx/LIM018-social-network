import { logIn } from './login.js';
import { mainpage } from './principal.js';
import { register } from './register.js';

const components = {
  Login: logIn,
  Mainpage: mainpage,
  Register: register,
};

export { components };
