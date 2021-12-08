import React from "react";
import { Link } from "react-router-dom";
import Modal from "../modal/modal";

class PostIndexItem extends React.Component {
    render() {
        const { body, comments, author } = this.props.post
        //debugger
        const comment = comments ? (
            
            comments.map((comment, idx) => (
                <li key={idx}>{comment.body}</li>
            ))
        ) : (
            null
        )

        return (
            <div className="post">
                <div className="post-header">
                    <div className="user-name">
                        <Link to={`/profile/${author.id}`}>{author.name}</Link>
                    </div>
                    <div className="post-edit-dropdown" onClick={this.props.popUpModal('editPost')}>edit post</div>
                    < Modal post={this.props.post} />
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
}

// const mSTP = (state, ownProps) => {
//     return ({
//         user: state.entities.users[ownProps.post.auther_id]
//     })
// }

export default PostIndexItem;