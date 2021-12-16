import { connect } from "react-redux";
import Comments from './comments';
import { deleteComment, updateComment } from "../../actions/comment_actions";

const mSTP = (state, ownProps) => ({
    comments: state.entities.comments,
    currentUser: state.session.currentUser,
    postId: ownProps.postId
})

const mDTP = dispatch => ({
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    updateComment: comment => dispatch(updateComment(comment))
})

export default connect(mSTP, mDTP)(Comments);