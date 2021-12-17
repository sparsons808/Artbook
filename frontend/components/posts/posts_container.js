import { connect } from "react-redux";
import Posts from "./posts";
import { updatePost, deletePost } from "../../util/post_api";
import { popUpModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => {
    return ({
        posts: ownProps.posts,
        currentUser: state.session.currentUser,
        comments: ownProps.comments
    })
}

const mDTP = dispatch => ({
    updatePost: (post) => dispatch(updatePost(post)),
    deletePost: (postId) => dispatch(deletePost(postId)),
})


export default connect(mSTP, mDTP)(Posts);