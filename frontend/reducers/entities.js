import { combineReducers } from "redux";
import UsersReducer from "./user";
import PostsReducer from './posts';
import CommentsReducer from './comments';

export default combineReducers({
    users: UsersReducer,
    posts: PostsReducer,
    comments: CommentsReducer
});