import React from "react";
import { connect } from "react-redux";
import { createComment, fetchComments } from "../../actions/comment_actions";

const mSTP = (state, ownProps) => {
    return ({
        comment: {
            post_id: ownProps.postId,
            body: '',
            commentor_id: state.session.currentUser.id
        }
    })
}

const mDTP = dispatch => ({
    createComment: (comment) => dispatch(createComment(comment)),
    fetchComments: () => dispatch(fetchComments())
});

class CommentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.comment

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEnter = this.handleEnter.bind(this)
    }

    handleChange(body) {
        return (e) => {
            this.setState({ [body]: e.currentTarget.value })
        }
    }

    handleEnter(e) {
        if(e.code === "Enter") {
            this.handleSubmit(e)
        }
    }
    handleSubmit(e) {
        e.preventDefault()
        this.props.createComment(this.state)
            .then(() => {
                this.setState({ body: ''})
                this.props.fetchComments()
            })
    }
 
    render() {
        return (
            <div className="comment-form-container">
                <input 
                    type="text" 
                    placeholder="Write a critique..."
                    onChange={this.handleChange('body')}
                    onKeyDown={this.handleEnter}
                    value={this.state.body}
                />
                
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(CommentForm);