import { userLogin } from '../firebase/config.js';

export function logIn() {
  // eslint-disable-next-line spaced-comment, operator-linebreak
  const viewLogin = /*html*/ `
      <div class="login">

        <div class="logo-container">
          <p class="logo-title">TecHelp</p>
          <div class="logo-circle">
            <img src="../imagens/logo.png" alt="logo" class="logo">
          </div>
          <p class="logo-description">Aquí podrás encontrar toda<br> la ayuda tech que necesitas.</p>
        </div>

        <div class="form-container">
          <form action="/" class="form">
            <input type="email" id="email" placeholder="Correo electrónico" class="input input-email" required>

            <input type="password" id="new-password" placeholder="Contraseña" class="input input-password" required>

            <input type="submit" value="Ingresar" id ="login-button" class="primary-button login-button">
          </form>
          <div class="icon-container">
            <button type = 'button' id='gmailIcon'><a href='#/home'><img src="../imagens/google-svgrepo-com.svg" alt="icono de gmail" class="icon-gmail">
            <span></span> 
            <button type='button' id="gitHubIcon"><a href='#/home'><img src="../imagens/github-svgrepo-com.svg" alt="icono de github" class="icon-github"></a></button>
          </div>
          <p class="login-register-text">¿No tienes una cuenta? <a class="link" id="registrate" href="#/registro"> Regístrate</a></p>
        </div>
      </div>`;

  return viewLogin;
}

export const signUpPage = () => {
  const userEmail = document.querySelector('#email');
  const userPassword = document.querySelector('#new-password');
  const loginButton = document.querySelector('#loginButton');

  loginButton.addEventListener('click', (e) => {
    userLogin(userEmail.value, userPassword.value).then((result) => {
      const userCredential = result.user;
      if (userCredential.emailVerified === false) {
        console.log(e.target);
        console.log('este correo es inválido');
      } else {
        alert(`Cuenta válida ${userCredential.email}`);
      }
    })
      .catch((error) => {
        const err = error.message;
        alert(err);
      });
  });
};
