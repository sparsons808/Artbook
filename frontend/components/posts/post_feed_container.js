import { connect } from "react-redux";
import { 
    fetchPosts,
    fetchPost,
    createPost,
    updatePost,
    deletePost
} from "../../actions/profile_actions";
import Feed from "./feed"

const mSTP = (state) => {
    debugger
    return({
        posts: Object.values(state.entitiers.posts)

    })
};

const mDTP = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    fetchPost: postId => dispatch(fetchPost(postId)),
    createPost: post => dispatch(createPost(post)),
    updatePost: post => dispatch(updatePost(post)),
    deletePost: postId => dispatch(deletePost(postId))
});

export default connect(null, mDTP)(Feed); 