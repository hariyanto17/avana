import actionTypes from "../actionTypes";

/**
 * @name setWebstoreShow
 * @description action reducer for set loading modal
 * @param {*} value
 */
export const setWebstoreShow = (value) => ({
  type: actionTypes.webstore.SET_SHOW,
  value,
});

/**
 * @name setWebstoreAllow
 * @description action reducer for set loading modal
 * @param {*} value
 */
export const setWebstoreAllow = (value) => ({
  type: actionTypes.webstore.SET_ALLOW,
  value,
});
