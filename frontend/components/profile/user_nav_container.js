import { connect } from "react-redux";
import UserNav from "./user_nav";
import { closeModal } from "../../actions/modal_actions";
import { updateUser, fetchUsers, updateUserText } from "../../actions/profile_actions";

const mSTP = (state, ownProps) => {
    //
    return ({
    user: state.entities.users[ownProps.userId]
    })
}

const mDTP = dispatch => ({
    updateUser: user => dispatch(updateUser(user)),
    closeModal: () => dispatch(closeModal()),
    updateUserText: user => dispatch(updateUserText(user))
});

export default connect(mSTP, mDTP)(UserNav);