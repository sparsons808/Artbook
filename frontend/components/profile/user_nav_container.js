import { connect } from "react-redux";
import UserNav from "./user_nav";
import { closeModal } from "../../actions/modal_actions";
import { updateUser, updateUserText } from "../../actions/profile_actions";
import { fetchUser } from "../../util/user_api";

const mSTP = (state, ownProps) => {
    //
    return ({
    user: state.entities.users[ownProps.userId]
    })
}

const mDTP = dispatch => ({
    updateUser: user => dispatch(updateUser(user)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    closeModal: () => dispatch(closeModal()),
    updateUserText: user => dispatch(updateUserText(user))
});

export default connect(mSTP, mDTP)(UserNav);