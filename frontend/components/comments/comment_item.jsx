import React from "react";

const CommentItem = ({
    comment,
    author,
    updateComment,
    deleteComment
}) => {


    return (
        <div className="comment-item">
            <div className="commentor-name">
                {author.name}
            </div>
            <div className="comment-content">

            </div>
        </div>
    )
}

export default CommentItem;