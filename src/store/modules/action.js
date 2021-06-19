import actionTypes from "../actionTypes";

/**
 * @name setModulesShow
 * @description action reducer for set loading modal
 * @param {*} value
 */
export const setModulesShow = (value) => ({
  type: actionTypes.modules.SET_SHOW,
  value,
});

/**
 * @name setModulesAllow
 * @description action reducer for set loading modal
 * @param {*} value
 */
export const setModulesAllow = (value) => ({
  type: actionTypes.modules.SET_ALLOW,
  value,
});
