// export const signInWithEmailAndPassword = () => Promise.resolve({ user: { name: '' } });

export const signInWithEmailAndPassword = jest.fn(() => Promise.resolve({}));
export const createUserWithEmailAndPassword = jest.fn(() => Promise.resolve({}));
