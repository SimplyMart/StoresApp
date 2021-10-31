import { createContext, useContext } from 'react';
import { FirebaseAuth } from '../firebase';

const AuthUserContext = createContext({
  authUser: null,
  storeData: [],
  loading: true,
  signout: async () => {},
  updateStoreData: () => {},
});

export function AuthUserProvider({ children }) {
  const auth = FirebaseAuth();

  return (
    <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>
  );
}
// custom hook to use the authUserContext and access authUser and loading
export const useAuth = () => useContext(AuthUserContext);
