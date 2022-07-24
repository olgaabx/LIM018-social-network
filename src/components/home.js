export function home(form) {
  const inicio = `
       <div class="form-container">
            <div class="logo-circle">
              <img src="../imagens/logo.png" alt="logo" class="logo">
            </div>
          ${form}`;

  const divElemento = document.createElement('div');
  divElemento.innerHTML = inicio;

  return divElemento;
}
