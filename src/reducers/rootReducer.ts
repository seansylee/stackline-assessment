import { combineReducers } from "redux";
import  itemReducer  from "./itemReducer";

const rootReducer = combineReducers({
    tem: itemReducer
});

export default rootReducer;