import { connect } from "react-redux";
import React from "react";
import { updatePost, deletePost } from "../../actions/post_actions";
import { popUpModal, closeModal } from "../../actions/modal_actions";
import PostForm from "./posts_form";

const mSTP = (state, ownProps) => {

    return ({
        post: ownProps.post,
        formType: 'Edit'
    })
}

const mDTP = dispatch => ({
    updatePost: post => dispatch(updatePost(post)),
    deletePost: postId => dispatch(deletePost(postId)),
    popUpModal: () => dispatch(popUpModal('editpost')),
    closeModal: () => dispatch(closeModal())
})


class EditPost extends React.Component {

    render() {
        return (
            <PostForm />
        )
    }
}

export default connect(mSTP, mDTP)(EditPost);