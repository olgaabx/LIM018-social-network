import { provider } from '../firebase/config.js';
import { userLogin, signInWithGmail } from '../firebase/index.js';

export function logIn() {
  // eslint-disable-next-line spaced-comment, operator-linebreak
  const viewLogin = /*html*/ `
      <div id="loginDiv" class="login">

        <div class="logo-container">
          <p class="logo-title">TecHelp</p>
          <div class="logo-circle">
            <img src="../imagens/logo.png" alt="logo" class="logo">
          </div>
          <p class="logo-description">Aquí podrás encontrar toda<br> la ayuda tech que necesitas.</p>
        </div>

        <div class="form-container">
          <p class="description">Ingresa tus datos</p>
          <form action="/" class="form" id="form">

            <input type="email" id="email" placeholder="Correo electrónico" class="input input-email" required>

            <input type="password" id="password" placeholder="Contraseña" class="input input-password" required>

            <input type="submit" value="Ingresar" id ="login-button" class="primary-button login-button">
            <a class = "link" id="muro" href="#/home"> Mi muro </a>
          </form>
          <div class="icon-container">
            <button type = 'button' id='gmailIcon'><a href='#/home'><img src="../imagens/google-svgrepo-com.svg" alt="icono de gmail" class="icon-gmail">
            <span></span>
            <button type='button' id="gitHubIcon"><a href='#/home'><img src="../imagens/github-svgrepo-com.svg" alt="icono de github" class="icon-github"></a></button>
          </div>
          <p class="login-register-text">¿No tienes una cuenta? <a class="link" id="registrate" href="#/registro"> Regístrate</a></p>
          <p class="login-register-text">!FELICIDADES¡ ya estas registrado<a class="link" id="registrate" href="#/home"> Ingresa aqui</a></p>
        </div>
      </div>`;

  // return viewLogin;

  const divElement = document.createElement('div');
  // divElement.setAttribute('class', 'backgroundImage');
  divElement.innerHTML = viewLogin;
  return divElement;
  // const blankPage = document.querySelector('#container');
  // blankPage.appendChild(divElement);
}

export const startSession = () => {
  const form = document.getElementById('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    userLogin(form.email.value, form.password.value)
      .then((result) => {
        const userCredential = result.user;
        // eslint-disable-next-line no-console
        console.log(userCredential);
        // if (userCredential.emailVerified === false) {
        //   console.log('este correo es inválido');
        // } else {
        //   alert(`Cuenta válida ${userCredential.email}`);
        window.location.hash = '#/home';
      })
      .catch((error) => {
        const err = error.message;
        // eslint-disable-next-line no-alert
        alert(err);
      });
  });
};

// Sign In With Gmail

export const singInGmail = () => {
  const gmailButton = document.getElementById('gmailIcon');
  gmailButton.addEventListener('click', (e) => {
    e.preventDefault();
    sessionStorage.clear();
    signInWithGmail(provider)
      .then((result) => {
        const credential = provider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;
        // searchUser;
        window.location.hash = '#/home';
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.customData.email;
        const credential = provider.credentialFromError(error);
      });
  });
};
