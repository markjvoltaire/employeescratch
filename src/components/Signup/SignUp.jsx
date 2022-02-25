import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { signUpUser } from '../../services/users';

export default function SignUp() {
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const history = useHistory();

  const signUserUp = async (e) => {
    e.preventDefault();
    await signUpUser(newEmail, newPassword);
    history.push('/');
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={signUserUp}>
        <input
          type="email"
          placeholder="Email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button>Submit</button>
      </form>
      <p>
        Already A Member? <Link to="/login"> Login Here</Link>
      </p>
    </div>
  );
}
