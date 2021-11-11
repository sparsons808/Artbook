import { connect } from "react-redux";
import { createPost } from "../../actions/profile_actions";
import PostForm from "./posts_form";
import { popUpModal, closeModal } from "../../actions/modal_actions";
const mSTP = (state) => {
    //debugger
    return ({
        post: {
            auther_id: state.session.currentUser.id,
            body: ''
        },
        currentUser: state.session.currentUser
    })

};

const mDTP = dispatch => ({
    createPost: post => dispatch(createPost(post)),
    popUpModal: () => dispatch(popUpModal("editpost")),
    closeModal: () => dispatch(closeModal())
});


export default connect(mSTP, mDTP)(PostForm);