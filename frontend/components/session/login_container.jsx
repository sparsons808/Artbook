import { connect } from "react-redux";
import LogInForm from "./login_form";
import { logInUser } from "../../actions/session_actions";
import { popUpModal } from "../../actions/modal_actions";
const mSTP = ({ errors }) => ({
    errors: errors.session,
    user: {
        email: '',
        password: ''
    },
    demo: {
        email: 'demo@gmail.com',
        password: 'password'
    },
    formType: 'Log In'
});

const mDTP = dispatch => ({
    action: user => dispatch(logInUser(user)),
    popUpModal: () => dispatch(popUpModal('signup'))
});

export default connect(mSTP, mDTP)(LogInForm);