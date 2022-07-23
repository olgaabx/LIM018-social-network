export function logIn() {
  // eslint-disable-next-line spaced-comment, operator-linebreak
  const viewLogin = /*html*/ `
      <div class="login">
          
            <div class="logo-circle">
              <p class="logoTitle">TecHelp</p>
              <img src="../imagens/logo.png" alt="logo" class="logo">
              <p class="logoDescription">Bienvenidos, aqui podrás encontrar toda la ayuda Tech que necesitas.</p>
            </div>
            <form action="/" class="form">
                <input type="email" id="email" placeholder="Correo electrónico" class="input input-email" required>

                <input type="password" id="new-password" placeholder="Contraseña" class="input input-password" required>

                <input type="submit" value="Ingresar" class="primary-button login-button">
                <a href="/">Olvidé mi contraseña</a>
            </form>
            <p class="text">¿No tienes una cuenta? <a class="link" id="registrate" href="#/registro"> Regístrate</a></p>
          
        </div>`;

  return viewLogin;
}
