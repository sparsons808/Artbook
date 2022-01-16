import Likes from "./likes";
import { connect } from "react-redux";
import { addLike, deleteLike, getLikes } from "../../actions/likes_actions";

const mSTP = (state) => ({
    likes: state.entities.likes
})

const mDTP = (dispatch) => ({
    addLike: like => dispatch(addLike(like)),
    deleteLike: likeId => dispatch(deleteLike(likeId)),
})

export default connect(mSTP, mDTP)(Likes);