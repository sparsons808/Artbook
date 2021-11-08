import { RECEIVE_POSTS, RECEIVE_POST, DELETE_POST } from "../actions/post_actions";

const PostsReducer = (state = {}, action) => {
    Object.freeze(state)
    const nextState = Object({}, state)

    switch(action.type) {
        case RECEIVE_POST:
            return nextState[action.post.id] = action.post
        case RECEIVE_POSTS:
            return { ...action.posts } 
        case DELETE_POST:
            delete nextState[action.postId]
            return nextState
        default:
            return state
    }
};

export default PostsReducer;