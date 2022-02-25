import React from 'react';
import { Login } from '../../components/Login/Login';
import { useHistory } from 'react-router-dom';
import Home from '../../components/Home';
import { signOutUser } from '../../services/users';

export default function Login() {
  const history = useHistory();

  const signUserOut = async (e) => {
    e.preventDefault();
    await signOutUser();
    history.push('/login');
    console.log('i got clicked');
  };
  return (
    <>
      <Login signOut={signOutUser} />
    </>
  );
}
