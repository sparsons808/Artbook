import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import React from "react";
import SignUpContainer from "../session/signup_container";
import PostFormContainer from "../posts/create_post_form_container";

const mSTP = ({ modal }) => ({
    modal: modal.modal
});

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

function Modal({ modal, closeModal, user }) {
//    //debugger
        

    if(!modal) return null;
    let comp;
    let className;
    switch (modal) {
        case "signup":
            comp = <SignUpContainer/>
            className = "modal-child"
            break;
        case 'editpost':
            comp = <PostFormContainer/>
            className = "modal-child-edit"
            break;
        default:
            return null;
    }



    return(
        <div className="modal-background" onClick={closeModal}>
            {/* <div className="times" onClick={() => closeModal()}>&times;</div> */}
            <div className={className} onClick={ e => e.stopPropagation()}>
                {comp}
            </div>
        </div>
    )
};


export default connect(mSTP, mDTP)(Modal);