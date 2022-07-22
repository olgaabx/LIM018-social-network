export function logIn() {
  const viewLogin = `
        <div class="login">
          <div class="form-container">
            <img src="" alt="logo" class="logo">

            <form action="/" class="form">
                <label for="email" class="label" required>Email address</label>
                <input type="email" id="email" placeholder="tucorreo@example.com" class="input input-email" required>

                <label for="password" class="label" required>Password</label>
                <input type="password" id="new-password" placeholder="***********" class="input input-password" required>

                <input type="submit" value="Log In" class="primary-button login-button">
                <a href="/">Forgot my password</a>
            </form>

            <button class="secondary-button signup-button"><a href="#/Registrarse">Registrarse</a></button>
          </div>
        </div>`;

  return viewLogin;
}
