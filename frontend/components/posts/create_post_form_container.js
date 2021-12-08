import { connect } from "react-redux";
import { createPost } from "../../actions/profile_actions";
import PostForm from "./posts_form";
import { popUpModal, closeModal } from "../../actions/modal_actions";
const mSTP = (state, ownProps) => {
    debugger
    const id = ownProps.userProfile ? ownProps.userProfile.id : null
    return ({
        post: {
            auther_id: state.session.currentUser.id,
            body: '',
            profile: id
        },
        currentUser: state.session.currentUser,
        formType: 'Create'
    })

};

const mDTP = dispatch => ({
    createPost: post => dispatch(createPost(post)),
    popUpModal: () => dispatch(popUpModal("createpost")),
    closeModal: () => dispatch(closeModal())
});


export default connect(mSTP, mDTP)(PostForm);