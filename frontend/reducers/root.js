import { combineReducers } from "redux";
import SessionReducer from "./session";
import entities from "./entities";

export default combineReducers({
    entities: entities,
    session: SessionReducer
});
