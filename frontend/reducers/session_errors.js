import { 
    RECEIVE_CURRENT_USER, 
    RECEIVE_SESSION_ERRORS
} from "../actions/session_actions";

const SessionErrors = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            let next = action.errors
            return next
        case RECEIVE_CURRENT_USER:
            let nextState = []
            return nextState
        default:
            return state
    }
}

export default SessionErrors;