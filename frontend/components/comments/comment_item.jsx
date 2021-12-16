import React from "react";
import DropDownCommentContainer from '../dropdown/dropdown_comment_container';
import { Link } from "react-router-dom";

const CommentItem = ({
    comment,
    author,
    updateComment,
    deleteComment,
    currentUser
}) => {

    const editCommentButton = () => (
        <div className="edit-comment">
            { author.id === currentUser.id ? (
                <DropDownCommentContainer commentId={comment.id} />
            ) : null}
        </div>
    )

    return (
        <div className="comment-item">
            <div className="commentor-name">
               <Link to={`/profile/${author.id}`}>{author.name}</Link> 
            </div>
            <div className="comment-content">
                <div className="comment-body">
                    {comment.body}
                </div>
                <div className="edit-comment-btn">
                    {editCommentButton()}
                </div>
            </div>
        </div>
    )
}

export default CommentItem;