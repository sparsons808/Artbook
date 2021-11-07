import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import React from "react";
import SignUpContainer from "../session/signup_container";
import UserEditContainer from "../profile/user_edit_container";

const mSTP = ({ modal }) => ({
    modal: modal.modal
});

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

function Modal({ modal, closeModal, user }) {
//    debugger
        

    if(!modal) return null;
    let comp;
    switch (modal) {
        case "signup":
            comp = <SignUpContainer/>
            break;
        case "edituser":
            comp = <UserEditContainer userId={user.id} />
            break;
        default:
            return null;
    }



    return(
        <div className="modal-background" onClick={closeModal}>
            {/* <div className="times" onClick={() => closeModal()}>&times;</div> */}
            <div className="modal-child" onClick={ e => e.stopPropagation()}>
                {comp}
            </div>
        </div>
    )
};


export default connect(mSTP, mDTP)(Modal);
