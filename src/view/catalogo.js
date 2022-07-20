export default () => {
  const viewCatalogo = `
         <h2 class = "text-center">!Bienvenido!</h2>
      // <figure class = "text-center">
      //     <img class = "image" src= "http://oleogif.com/bin/gifs/00/39/56.gif" alt ="Conejo">
      // </figure>`;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewCatalogo;

  return divElement;
};
