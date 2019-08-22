// for the combined reducers
import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { feedReducer } from "./feedReducer";
import { userReducer } from './userReducer';
import { profileReducer } from './profileReducer';
import { myProfileReducer } from './myProfileReducer';
import { myLikesReducer } from './myLikesReducer';
import {followedUsersReducer} from './followedUsersReducer'

export const reducers = combineReducers({ loginReducer, feedReducer, userReducer,profileReducer,myProfileReducer, myLikesReducer, followedUsersReducer });
