import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import actionTypes from "./actionTypes";
import { composeWithDevTools } from "redux-devtools-extension";

/**
 * ======================================
 * REDUCER
 * ======================================
 */

import loading from "./loading/reducer";

const reducer = combineReducers({
  loading,
});

/**
 * ======================================
 * MIDDLEWARE
 * ======================================
 */

const middleware = [thunk];

/**
 * ======================================
 * STORE
 * ======================================
 */

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export { store, actionTypes };

/**
 * ======================================
 * ACTION / DISPATCHER
 * ======================================
 */

export * from "./loading/action";

/**
 * ======================================
 * SELECTOR
 * ======================================
 */
export * from "./loading/selector";
