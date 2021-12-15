import React from "react";
import { Link } from "react-router-dom";
const PostItem = ({
    post,
    author,
    postId,
    currentUser
}) => {

    const postPhoto = () => (
        <div className="post-photo">
            { post.photo ? (
                <img src={post.photo} />
            ) : (
                <div></div>
            )}
        </div>
    )

    const editPostButton = () => (
        <div className="edit-post">
            {/* {author.id === currentUser.id ? (
                
            ) } */}
        </div>
    )
    return (
        <div key={postId + postId}className="post">
            <div className="post-header">
                <div className="user-name">
                    <Link to={`/profile/${author.id}`}>{author.name}</Link>
                </div>
            </div>
            <div className="post-photo-container">
                {postPhoto()}
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
                <span className="comment-btn">
                    <span>
                        <input type="submit" value="Comment" />
                    </span>
                </span>
            </div>
            <div className="comment-container">

            </div>
        </div>
    )

}

export default PostItem;