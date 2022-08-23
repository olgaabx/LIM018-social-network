import { logIn, loginEvent, singInGmail } from './login.js';
// import { mainpage } from './principal.js';
import { register, addSignUpEvents } from './register.js';
import { homePage, addHomePageEvents, getPosts } from './home.js';

const components = {
  Login: logIn,
  SignIn: loginEvent,
  SingInGmail: singInGmail,
  Register: register,
  AddSignUpEvents: addSignUpEvents,
  Home: homePage,
  AddHomePageEvents: addHomePageEvents,
  Getposts: getPosts,
  // Mainpage: mainpage,
};

export { components };
