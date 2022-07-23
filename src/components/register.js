export const register = () => {
  const formRegister = `
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
        </div>`;
  return formRegister;
};
