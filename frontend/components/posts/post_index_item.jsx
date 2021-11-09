import React from "react";

class PostIndexItem extends React.Component {
    render() {
        // debugger
        const { body, comments } = this.props.post
        const comment = comments.map((comment, idx) => (
            <li key={idx}>{comment.body}</li>
        ))
        return (
            <div className="post">
                <div>
                    {body}
                </div>
                <ul>
                    {comment}
                </ul>
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