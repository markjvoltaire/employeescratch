import { useState, createContext, useContext } from 'react';
import { getProfile } from '../services/profiles';

export const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const currentProfile = getProfile();
  console.log('currentProfile', currentProfile);
  const [profile, setProfile] = useState(
    currentProfile
      ? {
          name: currentProfile.name,
          email: currentProfile.email,
          birthday: currentProfile.birthday,
          bio: currentProfile.bio,
        }
      : {}
  );
  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

const useProfile = () => {
  const context = useContext(ProfileContext);

  if (context === undefined) {
    throw new Error('useProfile must be defined');
  }

  return context;
};

export { ProfileProvider, useProfile };
