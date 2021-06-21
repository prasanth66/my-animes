import { combineReducers } from "redux";
import animes from "./animes";


const rootReducer = combineReducers({
    animes : animes,
});

export default rootReducer ;