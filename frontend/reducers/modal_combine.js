import { combineReducers } from "redux";
import ModalReducer from "./modal";

export default combineReducers({
    modal: ModalReducer
});