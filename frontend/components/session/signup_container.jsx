import { connect } from "react-redux";
import { createUser, logInUser } from "../../actions/session_actions";
import SignUpModal from "./signup_modal";
import { closeModal } from "../../actions/modal_actions";

const mSTP = ({ errors }) => ({
    errors: errors.session,
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
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(SignUpModal);