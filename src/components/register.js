export const register = () => {
  const viewRegister = /*html*/ `
  <div class="login">
        <div class="form-container">
            <h1 class="title">My account</h1>

            <form action="/" class="form">
                <div>
                    <label for="name" class="label" required>Name</label>
                    <input type="text" id="name" placeholder="name" class="input input-name" required>

                    <label for="email" class="label" required>Email</label>
                    <input type="email" id="email" placeholder="email" class="input input-email" required>

                    <label for="password" class="label" required>Password</label>
                    <input type="password" id="password" placeholder="***********" class="input input-password" required>
                </div>

                <input type="submit" value="Create" class="primary-button login-button">
                <p class="texto">¿Ya tienes una cuenta? <a class="link" id="inicia" href="#/inicio"> Inicia sesión</a></p>
            </form>
        </div>
    </div> `;

  return viewRegister;
};
