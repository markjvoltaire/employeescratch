import { useState, createContext, useContext } from 'react';
import { getUser } from '../services/users';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(
    currentUser ? { id: currentUser.id, email: currentUser.email } : {}
  );
  console.log('user', user);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be defined');
  }

  return context;
};

export { UserProvider, useUser };
