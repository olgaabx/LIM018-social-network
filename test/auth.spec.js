// importamos la funcion que vamos a testear
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../src/firebase/config';
// import { logIn, startSession } from '../src/components/login.js';
import { userLogin, userRegister } from '../src/firebase/auth';
// import { components } from '../src/components';

jest.mock('../src/firebase/config');
jest.mock('../src/firebase/auth.js');
jest.mock('../src/firebase/post.js');
jest.mock('../src/firebase/index.js');

// User register
describe('userRegister', () => {
  it('should be a function', () => {
    expect(typeof userRegister).toBe('function');
  });
  it('should be able to register a user', () => userRegister('prueba@prueba.com', 'prueba')
    .then(() => {
      expect(createUserWithEmailAndPassword.mock.calls[0][1]).toBe('prueba@prueba.com');
      expect(createUserWithEmailAndPassword.mock.calls[0][2]).toBe('prueba');
    }));
});
// User log in
describe('userLogin', () => {
  it('should be a function', () => {
    expect(typeof userLogin).toBe('function');
  });
  it('should be able to log in', () => userLogin('prueba@prueba.com', 'prueba')
    .then(() => {
      expect(signInWithEmailAndPassword.mock.calls[0][1]).toBe('prueba@prueba.com');
      expect(signInWithEmailAndPassword.mock.calls[0][2]).toBe('prueba');
    }));
});

// function promiseTest() {
//   return new Promise((resolve) => {
//     setTimeout(resolve, 0);
//   });
// }

// describe('login', () => {
//   it('It should switch views to when the Google user authenticates', async () => {
//     const container = document.createElement('div');
//     container.id = 'container';
//     document.body.append(container);
//     container.appendChild(components.SingInGmail());

//     const gmailButton = document.getElementById('gmailIcon');
//     gmailButton.click();

//     await promiseTest();
//     expect(window.location.hash).toBe('/home');
//   });
// });
