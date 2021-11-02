import React from "react";
import { Route, Switch } from 'react-router-dom';
import SignUpContainer from './session/signup_container';
import LogInContainer from './session/login_container';
import NavContainer from './session/nav_container'
import { AuthRoute, ProtectedRoute } from "../util/route_utils";

export default () => (
    <div className="app">
        
        <ProtectedRoute path="/feed" component={NavContainer}/>
        <AuthRoute path="/signup" component={SignUpContainer}/>
        <AuthRoute path="/login" component={LogInContainer}/>
    
    </div>
)