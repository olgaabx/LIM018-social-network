import {
  userRegister,
  usersCollection,
  // updateDisplayName,
  emailVerification,
} from '../firebase/index.js';

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
                    <p class="mensajeRegister">Revisa tu correo, hemos enviado un mensaje de confirmación</p>
                    <p class="mensajeErrorRegister">No revises nada, igual no  envia nada jejej</p>
                </div>

                <input type="submit" value="Regístrate" id ="register-button" class="primary-button register-button">
                <p class="login-register-text">¿Ya tienes una cuenta? <br/><a class="link" id="inicia" href="#/inicio">Inicia sesión</a></p>
            </form>
        </div>
    </div> `;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewRegister;
  return divElement;
};
// register sin verificación de correo
// export const signupEvent = () => {
//   const formRegister = document.querySelector('#form-register');
//   formRegister.addEventListener('submit', (e) => {
//     e.preventDefault();
//     userRegister(formRegister.email.value, formRegister.password.value)
//       .then((userCredential) => {
//         const user = userCredential.user;

//         // agregamos el uid para poder agregarlo a la colección de usuarios
//         const userId = userCredential.user.uid;
//         // trayeyendo la collecion usaurio
//         usersCollection(
//           userId,
//           formRegister.name.value,
//           formRegister.email.value,
//         );

//         // emailVerification().then(() => {
//         //  alert('Revisa tu correo, hemos enviado una verificación');
//         //  window.location.href = '#/inicio';
//         // });

//         // eslint-disable-next-line no-alert
//         alert(`Registro exitoso ${user.email}`);
//       });
//     // window.location.href = '#/home';
//   });
// };

// registro con verirficación de correo
export const signupEvent = () => {
  const formRegister = document.querySelector('#form-register');
  const mensaje = document.querySelector('.mensajeRegister');
  const mensajeError = document.querySelector('.mensajeErrorRegister');

  formRegister.addEventListener('submit', (e) => {
    e.preventDefault();

    userRegister(formRegister.email.value, formRegister.password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        // agregamos el uid para poder agregarlo a la colección de usuarios
        const userId = userCredential.user.uid;
        // trayeyendo la collecion usaurio
        usersCollection(
          userId,
          formRegister.name.value,
          formRegister.email.value,
        );

        alert(`Registro exitoso ${user.email}`);
        emailVerification().then(() => {
          mensaje.style.display = 'block';
        }).catch((error) => {
          console.log(error);
          mensajeError.style.display = 'block';
        });
      });
  });
  // window.location.href = '#/home';
};
