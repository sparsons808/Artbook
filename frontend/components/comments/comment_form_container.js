import React from "react";
import { connect } from "react-redux";
import { createComment } from "../../actions/comment_actions";

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
    createComment: (comment) => dispatch(createComment(comment))
});

class CommentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.comment

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(body) {
        return (e) => {
            this.setState({ [body]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.createComment(this.state)
            .then(() => this.setState({ 'body': ''}))
    }
 
    render() {
        return (
            <div className="comment-form-container">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Write a critique..."
                        onChange={this.handleChange('body')}
                    />
                </form>
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(CommentForm);