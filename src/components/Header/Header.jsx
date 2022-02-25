import React from 'react';
import { useHistory } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { signOutUser } from '../../services/users';

export default function Header() {
  const history = useHistory();
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
      <h2>welcome back {user.email}</h2>
    </div>
  );
}
