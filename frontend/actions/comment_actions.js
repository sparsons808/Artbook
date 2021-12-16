import * as CommentAPIUtil from '../util/comments_util'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
})

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

const removeComment = commentId => ({
    type: DELETE_COMMENT,
    commentId
});

export const fetchComments = () => dispatch => {
    
    return (
        CommentAPIUtil.fetchComments()
            .then( res => {
                
                dispatch(receiveComments(res.comments))
            })
    )
}

export const createComment = (comment) => dispatch => {
    return (
        CommentAPIUtil.createComment(comment)
            .then( comment => dispatch(receiveComment(comment)))
    )
};

export const updateComment = (comment) => dispatch => {
    return (
        CommentAPIUtil.updateComment(comment)
            .then( comment => dispatch(receiveComment(comment)))
    )
};

export const deleteComment = commentId => dispatch => {
    return (
        CommentAPIUtil.deleteComment(commentId)
            .then( () => dispatch(removeComment(commentId)))
    )
};