import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { createProfile, getProfile } from '../../services/profiles';
import { getUser } from '../../services/users';

export default function CreateProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [birthday, setBirthday] = useState('');
  const { user } = useUser;

  const currentProfile = getProfile();
  const currentUser = getUser();
  console.log('currentUser', currentUser);
  console.log('currentProfile', currentProfile.name);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createProfile(name, email, bio, birthday);
    console.log(user);

    console.log('i got clicked');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <input
          placeholder="birthday"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />
        <button> Create bio</button>
      </form>
    </div>
  );
}
