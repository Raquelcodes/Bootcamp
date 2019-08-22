import {combineReducers} from 'redux';
import restaurantReducer from './restaurantReducer';
import loginReducer from './loginReducer'
import profileReducer from "./profileReducer";


const reducer = combineReducers(
    {
        loginReducer,
        restaurantReducer,
        profileReducer
    }
);

export default reducer