export const login = () => {
  const loginDiv = document.createElement('div');
  loginDiv.textContent = 'Bienvenido al Login';
  const buttonComeback = document.createElement('button');

  buttonComeback.textContent = 'Regresar';

  loginDiv.appendChild(buttonComeback);
  return loginDiv;
};
