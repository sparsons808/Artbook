import { connect } from "react-redux";
import UserEditForm from "./user_edit_form";
import { closeModal } from "../../actions/modal_actions";
import { updateUser, fetchUsers } from "../../actions/profile_actions";

const mSTP = (state, ownProps) => ({
    user: state.entities.users[ownProps.userId]
})

const mDTP = dispatch => ({
    updateUser: user => dispatch(updateUser(user)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(UserEditForm);