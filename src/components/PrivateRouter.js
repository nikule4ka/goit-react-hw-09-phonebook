import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from '../redux/auth/auth-selectors';

export default function PrivateRouter({ children, redirectTo, ...routeProps }) {
  const token = useSelector(getToken);
  return (
    <Route {...routeProps}>
      {Boolean(token) ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
