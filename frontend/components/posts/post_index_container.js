import { connect } from "react-redux";
import PostIndex from "./post_index";
import { 
    createPost, 
    updatePost, 
    fetchPosts, 
    fetchPost, 
    deletePost 
} from "../../actions/post_actions";

const mSTP = state => {
    debugger
    return ({
        posts: Object.values(state.entities.posts),
        currentUser: state.session.currentUser
    })
};

const mDTP = dispatch => ({
    createPost: post => dispatch(createPost(post)),
    updatePost: post => dispatch(updatePost(post)),
    fetchPosts: () => dispatch(fetchPosts()),
    fetchPost: postId => dispatch(fetchPost(postId)),
    deletePost: postId => dispatch(deletePost(postId))
});

export default connect(mSTP, mDTP)(PostIndex);