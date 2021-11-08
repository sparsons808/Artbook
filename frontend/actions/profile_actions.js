import * as UserAPIUtil from '../util/user_api';
import * as PostAPIUtil from '../util/post_api';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_POST = 'RECEIVE_POST';
export const DELETE_POST = 'DELETE_POST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_USERS = 'RECEIVE_USERS';

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
});

const receivePost = post => ({
    type: RECEIVE_POST,
    post
});

const removePost = postId => ({
    type: DELETE_POST,
    postId
});

const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts
});


export const fetchUsers = () => dispatch => (
    UserAPIUtil.fetchUsers()
        .then( users => dispatch(receiveUsers(users)))
);

export const fetchUser = userId => dispatch => (
    UserAPIUtil.fetchUser(userId)
        .then( user => dispatch(receiveUser(user)))
);

export const updateUser = user => dispatch => (
    UserAPIUtil.updateUserInfo(user)
        .then( user => dispatch(receiveUser(user)))
);

export const updateUserText = user => dispatch => (
    UserAPIUtil.updteUser(user)
        .then( user => dispatch(receiveUser(user)))
);

export const createPost = post => dispatch => (
    PostAPIUtil.createPost(post)
        .then( post => dispatch(receivePost(post)))
);

export const updatePost = post => dispatch => (
    PostAPIUtil.updatePost(post)
        .then( post => dispatch(receivePost(post)))
);

export const fetchPosts = () => dispatch => (
    PostAPIUtil.fetchAllPosts()
        .then( posts => dispatch(receivePosts(posts)))
);

export const fetchPost = postId => dispatch => (
    PostAPIUtil.fetchPost(postId)
        .then( post => dispatch(receivePost(post)))
);

export const deletePost = postId => dispatch => (
    PostAPIUtil.deletePost(postId)
        .then( () => dispatch(removePost(postId)))
);