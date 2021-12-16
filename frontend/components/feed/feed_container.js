import { connect } from "react-redux";
import Feed from './feed';
import {
 fetchPosts,
 updatePost,
 createPost,
 deletePost
} from '../../actions/post_actions'
import { popUpModal } from "../../actions/modal_actions";
import { fetchComments } from "../../actions/comment_actions";

const mSTP = (state) => {
    debugger
    return ({
        posts: state.entities.posts,
        currentUser: state.session.currentUser,
        comments: state.entities.comments
    })
}

const mDTP = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    updatePost: (post) => dispatch(updatePost(post)),
    createPost: (post) => dispatch(createPost(post)),
    deletePost: (postId) => dispatch(deletePost(postId)),
    fetchComments: () => dispatch(fetchComments()),
    popUpModal: () => dispatch(popUpModal('createpost'))
})

export default connect(mSTP, mDTP)(Feed);