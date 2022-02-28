import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import "./index.css";
import App from "./App";

// user reducer function
const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGGED_IN_USER":
      return {
        ...state,
        ...action.payload,
      };
    case "LOGOUT":
      return action.payload;
    default:
      return state;
  }
};

// Combine multiple reducers
const rootReducer = combineReducers({
  user: authReducer,
});

// Create store
const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
