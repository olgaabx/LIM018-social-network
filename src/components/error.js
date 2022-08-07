// Errores Loguin;

export const modalIniciarSesion = {

  usuarioInvalido: () => {
    const errorMensaje = `
      <div class= "modalError" id="modalUsuarioInvalido">
        <i class="fas fa-exclamation-triangle"></i>
        <p>Aún no estas registrado.</p>
      </div>
    `;
    return errorMensaje;
  },

};
