import { connect } from "react-redux";
import DropDown from "./dropdown";
import { updatePost, deletePost } from "../../util/post_api";
import { popUpModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => {

    return ({
        id: ownProps.postId,
        type: 'Post'
    })
};

const mDTP = dispatch => ({
    updatePost: post => dispatch(updatePost(post))
});

export default connect(mSTP, mDTP)(DropDown);