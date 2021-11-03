import { connect } from "react-redux";
import { fetchUsers, updateUser } from "../../actions/profile_actions";
import { 
    fetchPosts, 
    fetchPost, 
    createPost, 
    updatePost, 
    deletePost 
} from "../../actions/post_actions";
import Profile from "./profile";

const mSTP = ( state, ownProps ) => {
    // debugger
    return ({
        user: state.entities.users[ownProps.match.params.userId],
        currrentUser: state.entities.users[state.session.id]

    })
};

const mDTP = dispatch => ({
    fetchUsers: userId => dispatch(fetchUsers(userId)),
    updateUser: user => dispatch(updateUser(user)),
    fetchPosts: () => dispatch(fetchPosts()),
    fetchPost: postId => dispatch(fetchPost(postId)),
    createPost: post => dispatch(createPost(post)),
    updatePost: post => dispatch(updatePost(post)),
    deletePost: postId => dispatch(deletePost(postId))
});

export default connect(mSTP, mDTP)(Profile);