import { connect } from "react-redux";
import SignUpForm from "./signup_form";
import { logInUser } from "../../actions/session_actions";

const mSTP = () => ({
    user: {
        email: '',
        password: ''
    },

    formType: 'Log In'
});

const mDTP = dispatch => ({
    action: user => dispatch(logInUser(user))
});

export default connect(mSTP, mDTP)(SignUpForm);