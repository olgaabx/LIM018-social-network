import { logIn, startSession } from './login.js';
// import { mainpage } from './principal.js';
import { register, addSignUpEvents } from './register.js';
import { homePage, addHomePageEvents } from './home.js';

const components = {
  Login: logIn,
  SignUp: startSession,
  // Mainpage: mainpage,
  Register: register,
  Home: homePage,
  AddSignUpEvents: addSignUpEvents,
  AddHomePageEvents: addHomePageEvents,
};

export { components };
