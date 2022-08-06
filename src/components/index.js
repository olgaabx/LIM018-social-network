import { logIn, signUpPage } from './login.js';
// import { mainpage } from './principal.js';
import { register, addSignUpEvents } from './register.js';
import { homePage, addHomePageEvents, getPosts } from './home.js';

const components = {
  Login: logIn,
  SignUp: signUpPage,
  // Mainpage: mainpage,
  Register: register,
  Home: homePage,
  AddSignUpEvents: addSignUpEvents,
  AddHomePageEvents: addHomePageEvents,
  Getposts: getPosts,
};

export { components };
