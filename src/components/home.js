export function home(form) {
  const fondo = `<section class="contenedor1">
        <div class= "container">

          </div>
          ${form}
        </section>`;

  const divElemento = document.createElement('div');
  divElemento.innerHTML = fondo;

  return divElemento;
}
