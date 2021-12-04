import { combineReducers } from "redux";
import suggestions from "./suggestions";
import users from "./users";

export const rootReducer = combineReducers({ users, suggestions });
