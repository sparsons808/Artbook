import * as SessionsAPIUtill from '../util/session_api'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});


const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});


// makes the api call to the back end to create a new user after they
// have signed up then dispatches that user to the store
// to store in the users local state
export const createUser = user => dispatch => (
    SessionsAPIUtill.postUser(user)
    .then( user => (dispatch(receiveCurrentUser(user))),
    error => (dispatch(receiveSessionErrors(error.responseJSON))))
);

// makes the api call to the back in the create a new session
// for a user who has credentials to enter the app
// then dispatches that user to the store
// which stores it in my sesstions slice of state
export const logInUser = user => dispatch => (
    SessionsAPIUtill.postSession(user)
    .then( user => (dispatch(receiveCurrentUser(user))),
    error => (dispatch(receiveSessionErrors(error.responseJSON))))
);

// makes the api call to the back end to delete the
// session token then dispatches the logout action that
// makes the current user null in the state
export const logOutUser = () => dispatch => (
    SessionsAPIUtill.deleteSession()
    .then( () => dispatch(logoutCurrentUser()))
);

