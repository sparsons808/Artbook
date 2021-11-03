import { combineReducers } from "redux";
import UsersReducer from "./user";
import PostsReducer from './posts'

export default combineReducers({
    users: UsersReducer,
    posts: PostsReducer
});