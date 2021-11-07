import { combineReducers } from "redux";
import SessionReducer from "./session";
import entities from "./entities";
import popUpReducer from "./modal_combine";
import errors from "./errors";

export default combineReducers({
    entities: entities,
    session: SessionReducer,
    modal: popUpReducer,
    errors: errors
});
