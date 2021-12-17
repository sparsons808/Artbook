import { RECEIVE_POSTS, RECEIVE_POST, DELETE_POST } from "../actions/post_actions";

const PostsReducer = (state = {}, action) => {
    Object.freeze(state)
    const nextState = Object.assign({}, state)

    switch(action.type) {
        case RECEIVE_POST:
            // 
            nextState[action.post.id] = action.post
            return nextState
        case RECEIVE_POSTS:
            
            return action.posts
        case DELETE_POST:
            delete nextState[action.postId]
            return nextState
        default:
            return state
    }
};

export default PostsReducer;