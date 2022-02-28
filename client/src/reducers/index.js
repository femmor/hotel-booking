import { combineReducers } from "redux";
import { authReducer } from "./auth";

// Combine multiple reducers
export const rootReducer = combineReducers({
  user: authReducer,
});
