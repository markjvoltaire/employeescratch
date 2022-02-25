import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Link to="/login">Log In</Link>
      <Link to="/signup">SignUp</Link>
    </>
  );
}
