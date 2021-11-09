import React from "react";

class PostIndexItem extends React.Component {
    render() {
        // debugger
        const { body, comments, author } = this.props.post
        const comment = comments.map((comment, idx) => (
            <li key={idx}>{comment.body}</li>
        ))
        return (
            <div className="post">
                <div>
                    {author.name}
                </div>
                <div>
                    {body}
                </div>
                <div>
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