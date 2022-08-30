// export const signInWithEmailAndPassword = () => Promise.resolve({ user: { name: '' } });

export const signInWithEmailAndPassword = jest.fn(() => Promise.resolve({ user: 'name' }));
export const createUserWithEmailAndPassword = jest.fn(() => Promise.resolve({}));
// Clase GoogleAuthProvider agregada al config mock(mariano)
export class GoogleAuthProvider {}
