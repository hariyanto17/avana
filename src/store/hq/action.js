import actionTypes from "../actionTypes";

/**
 * @name setHqShow
 * @description action reducer for set loading modal
 * @param {*} value
 */
export const setHqShow = (value) => ({
  type: actionTypes.hq.SET_SHOW,
  value,
});

/**
 * @name setHqAllow
 * @description action reducer for set loading modal
 * @param {*} value
 */
export const setHqAllow = (value) => ({
  type: actionTypes.hq.SET_ALLOW,
  value,
});
