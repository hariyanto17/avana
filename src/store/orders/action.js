import actionTypes from "../actionTypes";

/**
 * @name setOrdersdShow
 * @description action reducer for set loading modal
 * @param {*} value
 */
export const setOrdersdShow = (value) => ({
  type: actionTypes.orders.SET_SHOW,
  value,
});

/**
 * @name setOrdersdAllow
 * @description action reducer for set loading modal
 * @param {*} value
 */
export const setOrdersdAllow = (value) => ({
  type: actionTypes.orders.SET_ALLOW,
  value,
});
