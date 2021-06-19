import actionTypes from "../actionTypes";

/**
 * @name setSettingsShow
 * @description action reducer for set loading modal
 * @param {*} value
 */
export const setSettingsShow = (value) => ({
  type: actionTypes.settings.SET_SHOW,
  value,
});

/**
 * @name setSettingsAllow
 * @description action reducer for set loading modal
 * @param {*} value
 */
export const setSettingsAllow = (value) => ({
  type: actionTypes.settings.SET_ALLOW,
  value,
});
