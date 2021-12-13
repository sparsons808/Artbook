import { connect } from "react-redux";
import Feed from './feed';
import {
 fetchPosts,
 updatePost,
 createPost,
 deletePost
} from '../../actions/post_actions'
import { popUpModal } from "../../actions/modal_actions";
const mSTP = (state) => {
    return ({
        posts: Object.values(state.entities.posts),
        currentUser: state.session.currentUser
    })
}

const mDTP = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    updatePost: (post) => dispatch(updatePost(post)),
    createPost: (post) => dispatch(createPost(post)),
    deletePost: (postId) => dispatch(deletePost(postId)),
    popUpModal: () => dispatch(popUpModal('createpost'))
})

export default connect(mSTP, mDTP)(Feed);