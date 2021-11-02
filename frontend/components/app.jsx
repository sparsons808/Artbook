import React from "react";
import { Route, Switch } from 'react-router-dom';
import SignUpContainer from './session/signup_container';
import LogInContainer from './session/login_container';
import NavContainer from './session/nav_container'
import { AuthRoute, ProtectedRoute } from "../util/route_utils";

export default () => (
    <div className="app">
        {/* profile route goes here as /profile/:userId */}
        <ProtectedRoute path="/feed" component={NavContainer}/>
        <AuthRoute path="/login" component={LogInContainer}/>
        <AuthRoute path="/signup" component={SignUpContainer}/>
        
    
    </div>
)