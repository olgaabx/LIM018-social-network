import { logIn, signUpPage } from './login.js';
import { mainpage } from './principal.js';
import { register } from './register.js';

const components = {
  Login: logIn,
  SignUp: signUpPage,
  Mainpage: mainpage,
  Register: register,
};

export { components };
