import actionTypes from "../actionTypes";

/**
 * @name setAgentdShow
 * @description action reducer for set loading modal
 * @param {*} value
 */
export const setAgentdShow = (value) => ({
  type: actionTypes.agentd.SET_SHOW,
  value,
});

/**
 * @name setAgentdAllow
 * @description action reducer for set loading modal
 * @param {*} value
 */
export const setAgentdAllow = (value) => ({
  type: actionTypes.agentd.SET_ALLOW,
  value,
});
