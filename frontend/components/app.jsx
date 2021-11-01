import React from "react";
import { Route, Switch } from 'react-router-dom';
import SignUpContainer from './session/signup_container';

export default () => (
    <div className="app">
        <Switch>
            <Route path="/signup" component={SignUpContainer}/>
        </Switch>
    </div>
)