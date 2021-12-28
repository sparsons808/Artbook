import Posts from "../posts/posts";
import { updatePost, deletePost } from "../../util/post_api";
import { popUpModal } from "../../actions/modal_actions";
import { connect } from "react-redux";

const mSTP = (state, ownProps) => {
    return ({
        posts: ownProps.posts,
        currentUser: state.entities.users[state.session.currentUser.id],
        comments: ownProps.comments,
        user: ownProps.user
    })
}

const mDTP = dispatch => ({
    updatePost: (post) => dispatch(updatePost(post)),
    deletePost: (postId) => dispatch(deletePost(postId)),
})


export default connect(mSTP, mDTP)(Posts);