import { connect } from "react-redux";
import React from "react";
import { updatePost, deletePost } from "../../actions/post_actions";
import { popUpModal, closeModal } from "../../actions/modal_actions";
import PostForm from "./posts_form";

const mSTP = (state, ownProps) => {
    // debugger
    return ({
        post: ownProps.post,
        formType: 'Edit',
        currentUser: state.session.currentUser
    })
}

const mDTP = dispatch => ({
    updatePost: post => dispatch(updatePost(post)),
    deletePost: postId => dispatch(deletePost(postId)),
    popUpModal: (modal) => dispatch(popUpModal(modal)),
    closeModal: () => dispatch(closeModal())
})


class EditPost extends React.Component {

    render() {
        // debugger
        return (
            <PostForm 
                post={this.props.post}
                formType={this.props.formType}
                updatePost={this.props.updatePost}
                deletePost={this.props.deletePost}
                closeModal={this.props.closeModal}
            />
        )
    }
}

export default connect(mSTP, mDTP)(EditPost);