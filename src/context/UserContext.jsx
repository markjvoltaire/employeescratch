import { createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = () => {
  return <UserContext.Provider></UserContext.Provider>;
};
