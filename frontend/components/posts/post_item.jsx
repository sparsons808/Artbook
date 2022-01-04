import React from "react";
import { Link } from "react-router-dom";
import DropDownContainer from '../dropdown/dropdown_container';
import CommentContainer from '../comments/comments_container';
import CommentFormContainer from '../comments/comment_form_container';

const PostItem = ({
    post,
    author,
    postId,
    currentUser,
    userPhoto
}) => {
    
    const postPhoto = () => (
        <div className="post-photo">
            { post.photo ? (
                <img className="post-image" src={post.photo} />
            ) : (
                <div></div>
            )}
        </div>
    )

    const editPostButton = () => (
        <div className="edit-post">
            { author.id === currentUser.id ? (
                <DropDownContainer postId={postId} />
            ) : null }
        </div>
    )
    return (
        <div key={postId + postId}className="post">
            <div className="post-header">
                <div className="user-name">
                    { userPhoto ? (
                        <img className="userphoto-post" src={userPhoto} />
                    ) : (
                        <img className="userphoto-post" src={profilephoto} />
                    )}
                    <Link to={`/profile/${author.id}`}>{author.name}</Link>
                </div>
                {editPostButton()}
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
                <CommentContainer postId={postId} />
            </div>
            <CommentFormContainer postId={postId} />
        </div>
    )

}

export default PostItem;