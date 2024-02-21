import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, user, adminOnly, ...rest }) => (
  <Route {...rest} render={props => (
    user && (!adminOnly || user.role === 'admin') ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login" />
    )
  )} />
);

export default PrivateRoute;
