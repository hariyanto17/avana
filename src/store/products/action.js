import actionTypes from "../actionTypes";

/**
 * @name setProductsShow
 * @description action reducer for set loading modal
 * @param {*} value
 */
export const setProductsShow = (value) => ({
  type: actionTypes.products.SET_SHOW,
  value,
});

/**
 * @name setProductsAllow
 * @description action reducer for set loading modal
 * @param {*} value
 */
export const setProductsAllow = (value) => ({
  type: actionTypes.products.SET_ALLOW,
  value,
});
