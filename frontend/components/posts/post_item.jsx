import React from "react";
import { Link } from "react-router-dom";
const PostItem = ({
    post,
    author,
    postId,
    updatePost,
    deletePost,
    popUpModal
}) => {


    return (
        <div key={postId + postId}className="post">
            <div className="post-header">
                <div className="user-name">
                    <Link to={`/profile/${author.id}`}>{author.name}</Link>
                </div>
            </div>
            <div className="post-body">
                {post.body}
            </div>
            <div className="add-comment">
                <span className="like-btn">
                    <span>
                        <input type="submit" value="Like" />
                    </span>
                </span>
            </div>
        </div>
    )

}

export default PostItem;