import { connect } from "react-redux";
import DropDown from "./dropdown";
import { updatePost, deletePost } from "../../util/post_api";
import { popUpModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => {

    return ({
        postId: ownProps.postId
    })
};

const mDTP = dispatch => ({
    updatePost: post => dispatch(updatePost(post)),
    deletePost: postId => dispatch(deletePost(postId)),
    popUpModal: () => dispatch(popUpModal('editPost'))
});

export default connect(mSTP, mDTP)(DropDown);