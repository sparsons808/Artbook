import { connect } from "react-redux";
import PostIndex from "./post_index";
import { 
    createPost, 
    updatePost, 
    fetchPosts, 
    fetchPost, 
    deletePost 
} from "../../actions/post_actions";

import { popUpModal, closeModal } from "../../actions/modal_actions";


const mSTP = (state, ownProps) => ({
    user: ownProps.user,
    posts: Object.values(state.entities.posts)
})

const mDTP = dispatch => ({
    createPost: post => dispatch(createPost(post)),
    updatePost: post => dispatch(updatePost(post)),
    fetchPosts: () => dispatch(fetchPosts()),
    fetchPost: postId => dispatch(fetchPost(postId)),
    popUpModal: (modal) => dispatch(popUpModal(modal)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(PostIndex);