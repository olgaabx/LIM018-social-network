import { logIn, loginEvent } from '../src/components/login.js';
// import { changeview } from '../src/index.js';
// import { register-container } from "../src/components/register";
// import { register } from '../src/components/register.js';

jest.mock('../src/firebase/config.js');
jest.mock('../src/firebase/auth.js');

describe('logIn', () => {
  it('debería ser una función', () => {
    expect(typeof logIn).toBe('function');
  });

  it('should render a login form', () => {
    document.body.innerHTML = '<div id="root"></div>';
    document.getElementById('root').appendChild(logIn());
    loginEvent();

    document.getElementById('loginDiv');
  });
});

// describe('changeView', () => {
//   document.body.innerHTML = '';
//   window.location.href = '#/home';
//   it('debería ser una función', () => {
//     expect(typeof changeView).toBe('function');
//   });

//   it('debería imprimir la ruta log-in', () => {
//     changeView('#/log-in');
//     const body = document.querySelector('body');
//     expect(body).toMatchSnapshot();
//   });
// });
// describe('register', () => {
//   it('debería ser una función', () => {
//     expect(typeof logIn).toBe('function');
//   });

//   it('should render a register form', () => {
//     document.body.innerHTML = '<div id="root"></div>';
//     document.getElementById('root').appendChild(register());
//     loginEvent();

//     document.getElementByClass('register-container');
//   });
// });
