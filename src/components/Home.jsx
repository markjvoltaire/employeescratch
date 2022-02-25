import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { signOutUser, getUser } from '../services/users';

export default function Home() {
  const currentUser = getUser();
  console.log(currentUser);
  const history = useHistory();
  const { user } = useUser();
  console.log('user', user);

  const signUserOut = async (e) => {
    e.preventDefault();
    await signOutUser();
    history.push('/login');
    console.log('i got clicked');
  };

  return (
    <>
      {user.email ? (
        <div>
          <button onClick={signUserOut}>Signout</button>
        </div>
      ) : (
        <>
          <Link to="/login">Log In</Link>
          <Link to="/signup">SignUp</Link>
        </>
      )}
    </>
  );
}
