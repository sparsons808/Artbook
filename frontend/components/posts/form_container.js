import { connect } from "react-redux";
import PostForm from "./post_form";
import { createPost } from "../../actions/post_actions";
import { closeModal } from "../../actions/modal_actions";

const mSTP = (state, ownprops) => {
    const id = ownprops.profileId ? ownprops.profileId : null

    return({
        post: {
            auther_id: state.session.currentUser.id,
            body: '',
            profile: id
        },
        currentUser: state.session.currentUser,
        formType: 'Create'
    })
};

const mDST = dispatch => ({
    action: (post) => dispatch(createPost(post)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDST)(PostForm);