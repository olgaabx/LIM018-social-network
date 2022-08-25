// importamos la funcion que vamos a testear
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../src/firebase/config';
// import { logIn, startSession } from '../src/components/login.js';
import { userLogin, userRegister } from '../src/firebase/auth';

jest.mock('../src/firebase/config');
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
