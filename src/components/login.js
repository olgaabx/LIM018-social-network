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

            <input type="submit" value="Ingresar" class="primary-button login-button" >
            <p class="login-register-text">registro exitoso <a class="link" id="registrate" href="#/home"> Ingresar aqui </a></p>
          </form>
          <div class="icon-container">
            <img src="../imagens/google-svgrepo-com.svg" alt="icono de gmail" class="icon-gmail">
            <span></span>
            <img src="../imagens/github-svgrepo-com.svg" alt="icono de github" class="icon-github">
          </div>
          <p class="login-register-text">¿No tienes una cuenta? <a class="link" id="registrate" href="#/registro"> Regístrate</a></p>
          
          </div>
      </div>`;

  return viewLogin;
}
