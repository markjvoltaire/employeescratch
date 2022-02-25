import React, { useContext, useState } from 'react';

import { signInUser, signOutUser } from '../../services/users';
import { useHistory, Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const signUserIn = async (e) => {
    e.preventDefault();
    await signInUser(email, password);
    history.push('/userprofile');
  };

  return (
    <div>
      <h1>Log In</h1>

      <form onSubmit={signUserIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Submit</button>
      </form>
      <p>
        Looking to Join? <Link to="/signup"> Sign Up Here</Link>
      </p>
      <div>
        <p>
          Go To Home Screen <Link to="/">Home</Link>
        </p>
      </div>
    </div>
  );
}
