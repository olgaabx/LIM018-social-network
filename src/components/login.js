export function logIn() {
  // eslint-disable-next-line spaced-comment, operator-linebreak
  const viewLogin = /*html*/ `
      <div class="login">
         


            <form action="/" class="form">
                <input type="email" id="email" placeholder="Correo electrónico" class="input input-email" required>

                <input type="password" id="new-password" placeholder="Contraseña" class="input input-password" required>

                <input type="submit" value="Ingresar" class="primary-button login-button">
                <a href="/">Olvidé mi contraseña</a>
            </form>
            <p class="text">¿No tienes una cuenta? <a class="link" id="registrate" href="#/registro"> Regístrate</a></p>
          </div>
        </div>`;

  return viewLogin;
}
