import { connect } from "react-redux";
import { createPost } from "../../actions/profile_actions";
import PostForm from "./posts_form";

const mSTP = (state) => ({
    post: {
        autherId: null,
        body: ''
    }
});

const mDTP = dispatch => ({
    createPost: post => dispatch(createPost()),
});


export default connect(mSTP, mDTP)(PostForm);