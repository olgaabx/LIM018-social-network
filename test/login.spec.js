import { logIn, loginEvent } from '../src/components/login.js';

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
