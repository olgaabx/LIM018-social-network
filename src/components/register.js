export const register = () => {
  const viewRegister = /*html*/ `
  <div class="login">
        <div class="form-container">
            <h1 class="title">My account</h1>

            <form action="/" class="form">
                <div>
                    <label for="name" class="label" required>Name</label>
                    <input type="text" id="name" placeholder="Olga Acosta" class="input input-name" required>

                    <label for="email" class="label" required>Email</label>
                    <input type="email" id="email" placeholder="platzi@example.com" class="input input-email" required>

                    <label for="password" class="label" required>Password</label>
                    <input type="password" id="password" placeholder="***********" class="input input-password" required>
                </div>

                <input type="submit" value="Create" class="primary-button login-button">
                <p class="texto">¿Ya tienes una cuenta? <a class="link" id="inicia" href="#/inicio"> Inicia sesión</a></p>
            </form>
        </div>
    </div> `;

  /* `
        <div id="inicio" class="cajaInterna2">
            <form id="formIngreso">
                <div class="seccionIngreso">
                    <input type="text" id="correoIngreso" class="datosIngreso" placeholder="Correo electrónico" required>
                    <i class="ph-envelope"></i>
                </div>

                <div class="seccionIngreso">
                    <input type="password" id="claveIngreso" class="datosIngreso" placeholder="Contraseña" required>
                    <i id="botonContraseña" class="ph-eye-closed"></i>
                </div>

                <button type="submit" id="botonIngresar" class="iniciarSesion">Ingresar</button>

                <p class="texto">O bien ingresa con</p>

                <div class="logosInicio">
                    <img id="imgFacebook" src="imagenes/FacebookOriginal.png">
                    <img id="imgGoogle" src="imagenes/GoogleOriginal.png">
                </div>

                 <p class="texto">¿Ya tienes una cuenta? <a class="link" id="inicia" href="#/inicio"> Inicia sesión</a></p>
            </form>
        </div>`; */
  return viewRegister;
};
