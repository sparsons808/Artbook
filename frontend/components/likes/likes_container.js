import Likes from "./likes";
import { connect } from "react-redux";
import { addLike, deleteLike } from "../../actions/likes_actions";

const mSTP = (state, Ownprops) => ({
    likes: Object.values(state.entities.likes),
    post: state.entities.posts[Ownprops.postId]
})

const mDTP = (dispatch) => ({
    addLike: like => dispatch(addLike(like)),
    deleteLike: likeId => dispatch(deleteLike(likeId)),
})

export default connect(mSTP, mDTP)(Likes);