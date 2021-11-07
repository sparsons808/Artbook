export const POP_UP_MODAL = "POP_UP_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";

export const popUpModal = modal => ({
    type: POP_UP_MODAL,
    modal
})

export const closeModal = () => ({
    type:HIDE_MODAL
})