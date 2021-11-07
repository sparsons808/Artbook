import { combineReducers } from "redux";
import SessionErrors from "./session_errors";

export default combineReducers({
    session: SessionErrors
});