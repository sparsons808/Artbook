import { connect } from "react-redux";
import DropDown from "./dropdown";
import { updatePost, deletePost } from "../../util/post_api";

const mSTP = (state, ownProps) => {

    return ({
        post: state.entities.posts[ownProps.postId],
        postId: ownProps.postId
    })
};

const mDTP = dispatch => ({
    updatePost: post => dispatch(updatePost(post)),
    deletePost: postId => dispatch(deletePost(postId))
});

export default connect(mSTP, mDTP)(DropDown);