export function mainpage(olga) {
  const fondo = `<section class="main-container">
          ${olga}
        </section>`;

  const divElemento = document.createElement('div');
  divElemento.innerHTML = fondo;

  return divElemento;
}
