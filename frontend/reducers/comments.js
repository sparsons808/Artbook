import { 
    RECEIVE_COMMENTS, 
    RECEIVE_COMMENT, 
    DELETE_COMMENT 
} from "../actions/comment_actions";

const CommentsReducer = (state = {}, action) => {
    Object.freeze(state)
    const nextState = Object.assign({}, state)

    switch(action.type) {
        case RECEIVE_COMMENTS:
            
            return action.comments
        case RECEIVE_COMMENT:
            nextState[action.comment.id] = action.comment
            return nextState
        case DELETE_COMMENT:
            delete nextState[action.commentId]
            return nextState
        default:
            return state
    }
};

export default CommentsReducer;