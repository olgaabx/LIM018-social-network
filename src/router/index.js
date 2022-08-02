import { logIn, signUpPage } from '../components/login.js';
import { register, addSignUpEvents } from '../components/register.js';
import { mainpage } from '../components/principal.js';
import { homePage } from '../components/home.js';

export const changeview = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '':
    case '#/inicio':
      container.appendChild(mainpage(logIn()));
      signUpPage();
      break;
    case '#/registro':
      container.appendChild(mainpage(register()));
      addSignUpEvents();
      break;
    case '#/home':
      container.appendChild(mainpage(homePage()));
      
      const taskForm = document.getElementById("taskForm");
      console.log(taskForm);
      break;
    default:
      container.innerHTML = 'Página No Encontrada';
      break;
  }
};
