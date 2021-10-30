import { createContext, useContext } from 'react';
import { FirebaseAuth } from '../firebase';

const AuthUserContext = createContext({
  authUser: null,
  loading: true,
  signout: async () => {},
});

export function AuthUserProvider({ children }) {
  const auth = FirebaseAuth();

  return (
    <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>
  );
}
// custom hook to use the authUserContext and access authUser and loading
export const useAuth = () => useContext(AuthUserContext);
