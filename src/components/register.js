import {
  userRegister,
  usersCollection,
  updateDisplayName,
} from "../firebase/index.js";

// import {collection} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
/* html */
export const register = () => {
  const viewRegister = /* html */ `
  <div class="register-container">
        <div class="logo-container logo-container-register">
          <div class="logo-circle logo-circle-register">
            <img src="https://d9hhrg4mnvzow.cloudfront.net/admissions.prepscholar.com/7ade0971-artificial-intelligence_107g07g07a07a000000028.png" alt="logo" class="logo logo-img-register">
          </div>
          <p class="logo-title logo-title-register">TecHelp</p>
        </div>
        <div class="form-container form-container-register">
            <h1 class="title-register">Regístrate aquí</h1>
            <p class="description">Ingresa tus datos</p>

            <form action="/" class="form" id="form-register">
                <div class="input-container">
                    <input type="text" id="name" name="name" placeholder="Nombre" class="input input-name" required>

                    <input type="email" id="email" name="email" placeholder="Correo electrónico" class="input input-email" required>

                    <input type="password" id="password" name="password" placeholder="Contraseña" class="input input-password" required>
                </div>

                <input type="submit" value="Regístrate" id ="register-button" class="primary-button register-button">
                <p class="login-register-text">¿Ya tienes una cuenta? <br/><a class="link" id="inicia" href="#/inicio">Inicia sesión</a></p>
            </form>
        </div>
    </div> `;
  // return viewRegister;

  const divElement = document.createElement('div');
  // divElement.setAttribute('class', 'backgroundImage');
  divElement.innerHTML = viewRegister;
  return divElement;

  // const divElement = document.createElement('div');
  // // divElement.setAttribute('class', 'backgroundImage');
  // divElement.innerHTML = viewRegister;
  // const blankPage = document.querySelector('#container');
  // blankPage.appendChild(divElement);
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
        console.log(result.user.uid);
        const idUser = result.user.uid;
        // trayeyendo la collecion usaurio
        usersCollection(
          idUser,
          formRegister.name.value,
          formRegister.email.value,
        );
        const userCredential = result.user;
        // con displayname estamos jalando el nombre
        updateDisplayName(formRegister.name.value);
        // eslint-disable-next-line no-console
        console.log(userCredential);

        // emailVerification().then(() => {
        //  alert('Revisa tu correo, hemos enviado una verificación');
        //  window.location.href = '#/inicio';
        // });

        // eslint-disable-next-line no-alert
        alert(`Registro exitoso ${userCredential.email}`);
      });
  });
};
