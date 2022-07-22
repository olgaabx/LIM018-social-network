export function home(form) {
  const homeDiv = `<section class="container1">
  <div class="container2">
  <img src="./Imganes/logo.png" alt="logoTech">
  </div>
  ${form}
  </section>`;

  const divElement = document.createElement('div');
  divElement.innerHTML = homeDiv;

  return homeDiv;
}
