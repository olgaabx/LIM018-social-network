import { logIn } from './login.js';
import { home } from './principal.js';
import { register } from './register.js';

const components = {
  login: logIn,
  Home: home,
  Register: register,
};

export { components };
