import React from "react";
import { Route, Switch } from 'react-router-dom';
import SignUpContainer from './session/signup_container';
import LogInContainer from './session/login_container';
import NavContainer from './session/nav_container'

export default () => (
    <div className="app">
        <Switch>
            <Route path="/signup" component={SignUpContainer}/>
            <Route path="/feed" component={NavContainer}/>
            <Route path="/" component={LogInContainer}/>
        </Switch>
    </div>
)