import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";

const mSTP = (state) => ({
    loggedin: Boolean(state.session.currentUser)
});

const Auth = ({ loggedin, path, component: Component }) => (
    <Route
        path={path}
        render={ props => (
            loggedin ? <Redirect to='/feed' /> : <Component {...props} />
        )}
    />
);

const Protected = ({ loggedin, path, component: Component }) => (
    <Route
        path={path}
        render={ props => (
            loggedin ? <Component {...props} /> : <Redirect to='/' />
        )}
    />
);

export const ProtectedRoute = withRouter(connect(mSTP)(Protected));

export const AuthRoute = withRouter(connect(mSTP)(Auth));