// importamos la funcion que vamos a testear
// import { createUserWithEmailAndPassword } from '../src/firebase/config';
import { logIn, signUpPage } from "../src/components/login";

describe("login", () => {
  it("debería ser una función", () => {
    expect(typeof login).toBe("function");
  });

  it("should render a login form", () => {
    document.body = '<div id="root"></div>';
    document.getElementById("root").appendChild(logIn());
    signUpPage();

    document.getElementById("loginDiv");
  });
});
