import { userRegister, emailVerification } from '../firebase/config.js';
// import {collection} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

export const register = () => {
  const viewRegister = /* html */ `
  <div class="register-container">
        <div class="logo-container logo-container-register">
          <div class="logo-circle logo-circle-register">
            <img src="../imagens/logo.png" alt="logo" class="logo logo-img-register">
          </div>
          <p class="logo-title logo-title-register">TecHelp</p>
        </div>
        <div class="form-container form-container-register">
            <h1 class="title-register">Regístrate aquí</h1>
            <p class="description">Ingresa tus datos</p>

            <form action="/" class="form" id="form-register">
                <div>
                    <input type="text" id="name" name="name" placeholder="Nombre" class="input input-name" required>

                    <input type="email" id="email" name="email" placeholder="Correo electrónico" class="input input-email" required>

                    <input type="password" id="password" name="password" placeholder="Contraseña" class="input input-password" required>
                </div>

                <input type="submit" value="Regístrate" id ="register-button" class="primary-button register-button">
                <p class="login-register-text">¿Ya tienes una cuenta? <a class="link" id="inicia" href="#/inicio">Inicia sesión</a></p>
            </form>
        </div>
    </div> `;
  return viewRegister;
};

export const addSignUpEvents = () => {
  // const userName = document.querySelector('#name');
  // const userEmail = document.querySelector('#email');
  // const userPassword = document.querySelector('#password');
  // const registerButton = document.querySelector('#register-button');
  const formRegister = document.querySelector('#form-register');
  formRegister.addEventListener('submit', (e) => {
    e.preventDefault();
    userRegister(formRegister.email.value, formRegister.password.value)
      .then((result) => {
        const userCredential = result.user;
        console.log(userCredential);

        //emailVerification().then(() => {
        //  alert('Revisa tu correo, hemos enviado una verificación');
        //  window.location.href = '#/inicio';
        //});

        alert(`Registro exitoso ${userCredential.email}`);
      });
  });
};
