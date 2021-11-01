import { connect } from "react-redux";
import { createUser, logInUser } from "../../actions/session_actions";
import SignUpForm from "./signup_form";

const mSTP = () => ({
    user: {
        name: '',
        email: '',
        age: '',
        password: ''

    },

    formType: 'Sign Up'
});

const mDTP = dispatch => ({
    action: user => dispatch(createUser(user))
});

export default connect(mSTP, mDTP)(SignUpForm);