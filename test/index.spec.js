// importamos la funcion que vamos a testear
// import { createUserWithEmailAndPassword } from '../src/firebase/config';

describe('login', () => {
  it('debería ser una función', () => {
    expect(typeof login).toBe('function');
  });
});
