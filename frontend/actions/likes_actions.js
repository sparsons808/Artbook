import * as LikesAPIUtil from '../util/likes_util';

export const RECEIVE_LIKES = "RECEIVE_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

const receiveLikes = (likes) => ({
    type: RECEIVE_LIKES,
    likes
});

const receiveLike = (like) => ({
    type: RECEIVE_LIKE,
    like
});

const removeLike = (likeId) = ({
    type: REMOVE_LIKE,
    likeId
});

export const addLike = (like) => dispatch => {
    return (
        LikesAPIUtil.makeLike(like)
            .then( like => dispatch(receiveLike(like)))
    )
};

export const deleteLike = (likeId) => dispatch => {
    return (
        LikesAPIUtil.deleteLike(likeId)
            .then( () => dispatch(removeLike(likeId)))
    )
};

export const getLikes = () => dispatch => {
    return (
        LikesAPIUtil.getAllLikes()
            .then( res => dispatch(receiveLikes(res.likes)))
    )
};