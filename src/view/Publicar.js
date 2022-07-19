export default () =>{
    const viewPublicar = `<p>Hola esta es mi sección Publicar</p>`

    const divElem = document.createElement('div');
    divElem.innerHTML=viewPublicar;

    return divElem; 
}

