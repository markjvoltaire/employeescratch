import React from 'react';
import { useUser } from '../../context/UserContext';
import { signOutUser } from '../../services/users';

export default function Header() {
  const { user } = useUser();

  const signUserOut = async (e) => {
    e.preventDefault();
    await signOutUser();
    history.push('/login');
    console.log('i got clicked');
  };

  return (
    <div>
      <button onClick={signUserOut}>Signout</button>
      {user.email ? <p>Welcome Back {user.email}</p> : <p>Welcome Guest</p>}
    </div>
  );
}
