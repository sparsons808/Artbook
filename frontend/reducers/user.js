import { RECEIVE_USER, RECEIVE_USERS } from "../actions/profile_actions";

const UsersReducer = ( state = {}, action ) => {
    Object.freeze(state)
    const nextState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_USER:
            // debugger
            return nextState[action.user.id] = action.user
        case RECEIVE_USERS:
            return action.users
        default:
            return state
    }
};


export default UsersReducer;