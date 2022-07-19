export default () =>{
    const viewHome = `<p>Hola esta es mi seccion Home</p>`

    const divElem = document.createElement('div');
    divElem.innerHTML=viewHome;

    return divElem; 
}
