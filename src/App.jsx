import React from 'react';
import Home from './components/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import { UserProvider } from './context/UserContext';
import SignUp from './components/Signup/SignUp';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import UserProfile from './views/Profile/UserProfile';
import { ProfileProvider } from './context/ProfileContext';
import CreateProfile from './views/CreateProfile/CreateProfile';

export default function App() {
  return (
    <UserProvider>
      <ProfileProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <PrivateRoute path="/userprofile">
              <Header />
              <UserProfile />
            </PrivateRoute>
            <PrivateRoute path="/createprofile">
              <CreateProfile />
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </ProfileProvider>
    </UserProvider>
  );
}
