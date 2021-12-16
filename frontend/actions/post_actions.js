import * as PostAPIUtil from "../util/post_api";
import { receiveComments } from './comment_actions';

export const RECEIVE_POST = 'RECEIVE_POST';
export const DELETE_POST = 'DELETE_POST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

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

export const createPost = (post) => dispatch => (
    PostAPIUtil.createPost(post)
        .then( post => dispatch(receivePost(post)))
);

export const updatePost = (post, id) => dispatch => {
    
    return (
        PostAPIUtil.updatePost(post, id)
            .then( post => dispatch(receivePost(post)))
    )

}


export const fetchPosts = () => dispatch => {
    return (
        PostAPIUtil.fetchAllPosts()
            .then( rez => {
                debugger
                dispatch(receivePosts(rez.posts))
            })
    )
};

export const fetchPost = postId => dispatch => (
    PostAPIUtil.fetchPost(postId)
        .then( post => dispatch(receivePost(post)))
);

export const deletePost = postId => dispatch => (
    PostAPIUtil.deletePost(postId)
        .then( () => dispatch(removePost(postId)))
);

