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
import { getLikes } from "../../actions/likes_actions";

const mSTP = (state) => {
    
    return ({
        posts: state.entities.posts,
        currentUser: state.entities.users[state.session.currentUser.id],
        comments: state.entities.comments
    })
}

const mDTP = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    updatePost: (post) => dispatch(updatePost(post)),
    createPost: (post) => dispatch(createPost(post)),
    deletePost: (postId) => dispatch(deletePost(postId)),
    fetchComments: () => dispatch(fetchComments()),
    getLikes: () => dispatch(getLikes()),
    popUpModal: () => dispatch(popUpModal('createpost'))
})

export default connect(mSTP, mDTP)(Feed);