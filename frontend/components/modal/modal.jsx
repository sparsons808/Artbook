import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import React from "react";
import SignUpContainer from "../session/signup_container";
import CreatePostContainer from "../posts/form_container";
import EditPostContainer from '../posts/edit_post_container';

const mSTP = ({ modal }) => ({
    modal: modal.modal
});

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

function Modal({ modal, closeModal, user, userProfile, postId }) {
//    //
        

    if(!modal) return null;
    let comp;
    let className;
    switch (modal) {
        case "signup":
            comp = <SignUpContainer/>
            className = "modal-child"
            break;
        case 'createpost':
            comp = <CreatePostContainer userProfile={userProfile}/>
            className = "modal-child-edit"
            break;
        case 'editPost':
            debugger
            comp = <EditPostContainer postId={postId} />
            className = 'modal-child-edit'
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
