import React from 'react';
import { getProfile } from '../../services/profiles';
import { Link } from 'react-router-dom';

export default function UserProfile() {
  getProfile();
  console.log('getProfile', getProfile);
  return (
    <div>
      <h1>hello</h1>
      <Link to="/createprofile">create profile</Link>
    </div>
  );
}
