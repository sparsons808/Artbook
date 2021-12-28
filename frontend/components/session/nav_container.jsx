import { connect } from "react-redux";
import Nav from './nav';
import { logOutUser } from "../../actions/session_actions";

const mSTP = state => ({
    currentUser: state.entities.users[state.session.currentUser.id]
});

const mDTP = dispatch => ({
    logout: () => dispatch(logOutUser())
});

export default connect(mSTP, mDTP)(Nav);