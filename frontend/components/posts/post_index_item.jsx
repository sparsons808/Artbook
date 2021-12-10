import React from "react";
import { Link } from "react-router-dom";
import PostEditModal from "./post_edit_modal";

const PostIndexItem = ({
    postId,
    deletePost,
    updatePost,
    popUpModal,
    comments,
    author,
    post,
    currentUser
}) => {
    
    const comment = comments ? (
            
        comments.map((comment, idx) => (
            <li key={idx}>{comment.body}</li>
        ))
    ) : (
        null
    )

    const body = post.body
    
    const editIcon = () => {
        author.id === currentUser.id ? (
            <PostEditModal popUpModal={popUpModal} postId={postId} />
        ) : null
    }

    return (
        <div className="post">
            <div className="post-header">
                <div className="user-name">
                    <Link to={`/profile/${author.id}`}>{author.name}</Link>
                </div>
                {editIcon()}                
            </div>
            <div className="post-body">
                {body}
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
            <div className='comment-container'>
                <ul>
                    {comment}
                </ul>
            </div>
        </div>
    )
    
}

// const mSTP = (state, ownProps) => {
//     return ({
//         user: state.entities.users[ownProps.post.auther_id]
//     })
// }

export default PostIndexItem;