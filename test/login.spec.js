import { logIn, startSession } from '../src/components/login.js';

jest.mock('../src/firebase/config.js');
jest.mock('../src/firebase/auth.js');
// Prueba hecha por Nico -- render
describe('logIn', () => {
  it('debería ser una función', () => {
    expect(typeof logIn).toBe('function');
  });

  it('should render a login form', () => {
    document.body.innerHTML = '<div id="root"></div>';
    document.getElementById('root').appendChild(logIn());
    startSession();

    document.getElementById('loginDiv');
  });
});
