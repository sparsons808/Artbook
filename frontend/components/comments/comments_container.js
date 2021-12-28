import { connect } from "react-redux";
import Comments from './comments';
import { deleteComment, updateComment } from "../../actions/comment_actions";

const mSTP = (state, ownProps) => ({
    comments: state.entities.comments,
    currentUser: state.entities.users[state.session.currentUser.id],
    postId: ownProps.postId,
    comment: {
        post_id: ownProps.postId,
        body: '',
        commentor_id: state.session.currentUser.id
    }
})

const mDTP = dispatch => ({
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    updateComment: comment => dispatch(updateComment(comment))
})

export default connect(mSTP, mDTP)(Comments);