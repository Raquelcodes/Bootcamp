import {combineReducers} from 'redux';
import todoListReducer from "./todolistreducers";
import filterReducer from "./filterreducers";

const mainreducers = combineReducers({todoListReducer, filterReducer})

export default mainreducers