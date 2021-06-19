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
import dashboard from "./dashboard/reducer";
import hq from "./hq/reducer";
import agent from "./agent/reducer";
import orders from "./orders/reducer";
import products from "./products/reducer";
import webstore from "./webstore/reducer";
import settings from "./settings/reducer";
import modules from "./modules/reducer";

const reducer = combineReducers({
  loading,
  dashboard,
  hq,
  agent,
  orders,
  products,
  webstore,
  settings,
  modules,
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
export * from "./dashboard/action";
export * from "./hq/action";
export * from "./agent/action";
export * from "./orders/action";
export * from "./products/action";
export * from "./webstore/action";
export * from "./settings/action";
export * from "./modules/action";

/**
 * ======================================
 * SELECTOR
 * ======================================
 */
export * from "./loading/selector";
export * from "./dashboard/selector";
export * from "./hq/selector";
export * from "./agent/selector";
export * from "./orders/selector";
export * from "./products/selector";
export * from "./webstore/selector";
export * from "./settings/selector";
export * from "./modules/selector";
