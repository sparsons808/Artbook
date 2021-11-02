import { connect } from "react-redux";
import { createUser, logInUser } from "../../actions/session_actions";
import SignUpForm from "./signup_form";

const mSTP = () => ({
    user: {
        name: '',
        email: '',
        password: ''

    },
    demo: {
        email: 'demo@gmail.com',
        password: 'password'
    },
    formType: 'Sign Up'
});

const mDTP = dispatch => ({
    action: user => dispatch(createUser(user)),
    logInUser: user => dispatch(logInUser(user))
});

export default connect(mSTP, mDTP)(SignUpForm);