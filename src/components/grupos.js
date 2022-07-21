export default () => {
  const viewGrupos = '<p>Hola esta es mi seccion grupos</p>';

  const divElem = document.createElement('div');
  divElem.innerHTML = viewGrupos;

  return divElem;
};
