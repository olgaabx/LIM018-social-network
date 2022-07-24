/* eslint-disable operator-linebreak */
export function mainpage(blankpage) {
  const fondo = /* html */
      `<section class="main-container">
          ${blankpage}
      </section>`;

  const divElemento = document.createElement('div');
  divElemento.innerHTML = fondo;

  return divElemento;
}
