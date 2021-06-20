import actionTypes from "../actionTypes";

/**
 * @name setOrdersShow
 * @description action reducer for set loading modal
 * @param {*} value
 */
export const setOrdersShow = (value) => ({
  type: actionTypes.orders.SET_SHOW,
  value,
});

/**
 * @name setOrdersAllow
 * @description action reducer for set loading modal
 * @param {*} value
 */
export const setOrdersAllow = (value) => ({
  type: actionTypes.orders.SET_ALLOW,
  value,
});
