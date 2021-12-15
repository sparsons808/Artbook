import React from "react";
import PostForm from "./post_form";
import { connect } from "react-redux";
import { updatePost } from '../../actions/post_actions'
import { closeModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => {
    debugger
    return (
        {
            post: state.entities.posts[ownProps.postId],
            currentUser: state.session.currentUser,
            formType: 'Edit'
        }
    )
}

const mDST = dispatch => ({
    action: (post) => dispatch(updatePost(post)),
    closeModal: () => dispatch(closeModal())
})

class EditPost extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if(!this.props.post) return null
        return (
            <PostForm 
                post={this.props.post}
                currentUser={this.props.currentUser}
                formType={this.props.formType}
                action={this.props.action}
                closeModal={this.props.closeModal}
            />
        )
    }
}

export default connect(mSTP, mDST)(EditPost);