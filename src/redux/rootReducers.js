import {combineReducers} from "redux";

import cardReducer from "./cardReducer";
import phoneReducer from "./phoneReducer";
import filterReducer from "./filterReducer";



export default combineReducers({
    phoneReducer,
    filterReducer,
    cardReducer

})