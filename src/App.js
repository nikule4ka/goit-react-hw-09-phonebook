import React, { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router';
import { connect } from 'react-redux';
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

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <div className="App">
        <>
          <AppBar />
          <Suspense
            fallback={<Loader type="ThreeDots" color="#228B22" height={50} width={50} />}
          >
            <Switch>
              <PublicRouter exact path="/" component={HomeView} />

              <PublicRouter
                path="/register"
                restricted
                redirectTo="/contacts"
                component={RegisterView}
              />
              <PublicRouter
                path="/login"
                restricted
                redirectTo="/contacts"
                component={LoginView}
              />

              <PrivateRouter
                path="/contacts"
                component={ContactsView}
                redirectTo="/login"
              />
            </Switch>
          </Suspense>
        </>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
