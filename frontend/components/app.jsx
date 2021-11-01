import React from "react";
import { Route, Switch } from 'react-router-dom';
import SignUpContainer from './session/signup_container';
import LogInContainer from './session/login_container';

export default () => (
    <div className="app">
        <Switch>
            <Route path="/signup" component={SignUpContainer}/>
            <Route path="/login" component={LogInContainer}/>
        </Switch>
    </div>
)