import React from "react";
import CommentItemContainer from "./comment_item";

class Comments extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { comments } = this.props

        const comment = Object.values(comments).map( comment => {
            if(comment.post_id === this.props.postId) {

                return (
                    <CommentItemContainer
                        key={comment.id}
                        comment={comment}
                        author={comment.author}
                        currentUser={this.props.currentUser}
                        userPhoto={comment.userphoto}
                    />
                )
            }
        })
        return (
            <div className="comment-container">
                {comment}
            </div>
        )
    }
}

export default Comments;