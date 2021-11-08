import React from "react";
import { Route, Switch } from 'react-router-dom';
import SignUpContainer from './session/signup_container';
import LogInContainer from './session/login_container';
import NavContainer from './session/nav_container';
import ProfileContainer from './profile/profile_container';
import { AuthRoute, ProtectedRoute } from "../util/route_utils";
import UserNaveContainer from "./profile/user_nav_container";
import FeedContainer from './posts/post_feed_container';

export default () => (
    <div className="app">
        {/* profile route goes here as /profile/:userId */}
        <ProtectedRoute path="/" component={NavContainer}/>
        <Switch>
            <AuthRoute exact path="/login" component={LogInContainer}/>
            <AuthRoute path="/signup" component={SignUpContainer}/>
            <ProtectedRoute path="/feed" component={FeedContainer}/>
            <ProtectedRoute path="/profile/:userId" component={ProfileContainer}/>
        </Switch>
        
    
    </div>
)