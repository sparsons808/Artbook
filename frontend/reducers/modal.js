import { POP_UP_MODAL, HIDE_MODAL } from "../actions/modal_actions"
const ModalReducer = (state = null, action) => {

    switch (action.type) {
        case POP_UP_MODAL:
            return action.modal
        case HIDE_MODAL:
            return null
        default:
            return state
    }
};


export default ModalReducer;