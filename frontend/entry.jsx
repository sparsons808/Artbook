import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store'
import Root from './components/root'
import { fetchAllPosts } from './util/post_api'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser
            }
        }
    }

    window.fetchAllPosts = fetchAllPosts ;
    
    const store = configureStore(preloadedState);
    ReactDOM.render(<Root store={store}/>, root);
})