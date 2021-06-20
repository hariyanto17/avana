import actionTypes from '../actionTypes';

/**
 * @name setAllert
 * @description action reducer for set loading modal
 * @param {*} value
 */
export const setAllert = value => ({
  type: actionTypes.allert.SET_ALLERT,
  value
});
