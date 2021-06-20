import actionTypes from "../actionTypes";

/**
 * @name setAgentShow
 * @description action reducer for set loading modal
 * @param {*} value
 */
export const setAgentShow = (value) => ({
  type: actionTypes.agent.SET_SHOW,
  value,
});

/**
 * @name setAgentAllow
 * @description action reducer for set loading modal
 * @param {*} value
 */
export const setAgentAllow = (value) => ({
  type: actionTypes.agent.SET_ALLOW,
  value,
});
