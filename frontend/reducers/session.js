import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

const _nullCurrentUser = {
    currentUser: null
};


const SessionReducer = (state = _nullCurrentUser, action) => {
    Object.freeze(state)

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return { currentUser: action.user }
        case LOGOUT_CURRENT_USER:
            return _nullCurrentUser
        default:
            return state
    }
};


export default SessionReducer;