import actionTypes from "../actionTypes";

/**
 * @name setDashboardShow
 * @description action reducer for set loading modal
 * @param {*} value
 */
export const setDashboardShow = (value) => ({
  type: actionTypes.dashboard.SET_SHOW,
  value,
});

/**
 * @name setDashboardAllow
 * @description action reducer for set loading modal
 * @param {*} value
 */
export const setDashboardAllow = (value) => ({
  type: actionTypes.dashboard.SET_ALLOW,
  value,
});
