import { createStore, applyMiddleware } from "redux";
import RootReducer from '../reducers/root';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const configureStore = (preloadedState = {}) => createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(thunk)
);


export default configureStore;