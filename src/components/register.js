export const register = () => {
  const viewRegister = /* html */ `
  <div class="login">
        <div class="form-container">
            <h1 class="title">Registrate aquí</h1>
            <p>Ingresa tus datos aquí</p>

            <form action="/" class="form">
                <div>
                    <input type="text" id="name" placeholder="Nombre" class="input input-name" required>

                    <input type="email" id="email" placeholder="Correo electrónico" class="input input-email" required>

                    <input type="password" id="password" placeholder="Contraseña" class="input input-password" required>
                </div>

                <input type="submit" value="Create" class="primary-button login-button">
                <p class="texto">¿Ya tienes una cuenta? <a class="link" id="inicia" href="#/inicio">Inicia sesión</a></p>
            </form>
        </div>
    </div> `;
  return viewRegister;
};
