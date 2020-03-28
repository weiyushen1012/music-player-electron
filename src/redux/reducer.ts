import { combineReducers } from "redux";
import playlist from "./reducers/playlist";
import player from "./reducers/player";

export default combineReducers({
    playlist,
    player
});
