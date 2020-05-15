import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authHeader } from '../_helpers/auth-header';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        (authHeader().Authorization && authHeader().Authorization.email)
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login/sign-in', state: { from: props.location } }} />
    )} />
)
