import React, { Suspense, lazy, useEffect } from 'react';
import { Switch } from 'react-router';
import { useDispatch } from 'react-redux';
import './App.css';
import AppBar from './components/AppBar';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { getCurrentUser } from './redux/auth/auth-operations';

import PrivateRouter from './components/PrivateRouter';
import PublicRouter from './components/PublicRouter';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "home-page" */),
);

const RegisterView = lazy(() =>
  import('./views/RegisterView' /* webpackChunkName: "registration-page" */),
);

const LoginView = lazy(() =>
  import('./views/LoginView' /* webpackChunkName: "logIn-page" */),
);

const ContactsView = lazy(() =>
  import('./views/ContactsView' /* webpackChunkName: "logIn-page" */),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div className="App">
      <>
        <AppBar />
        <Suspense
          fallback={<Loader type="ThreeDots" color="#228B22" height={50} width={50} />}
        >
          <Switch>
            <PublicRouter exact path="/">
              <HomeView />
            </PublicRouter>

            <PublicRouter path="/register" restricted redirectTo="/contacts">
              <RegisterView />
            </PublicRouter>

            <PublicRouter path="/login" restricted redirectTo="/contacts">
              <LoginView />
            </PublicRouter>

            <PrivateRouter path="/contacts" redirectTo="/login">
              <ContactsView />
            </PrivateRouter>
          </Switch>
        </Suspense>
      </>
    </div>
  );
}
