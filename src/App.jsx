import React from 'react';
import Home from './components/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import { UserProvider } from './context/UserContext';
import SignUp from './components/Signup/SignUp';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import CreateProfile from './components/CreateProfile';
import Profile from './views/Profile/Profile';

export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <PrivateRoute>
          <Header />
        </PrivateRoute>
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
          <PrivateRoute path="/profile">
            <Profile />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
}
