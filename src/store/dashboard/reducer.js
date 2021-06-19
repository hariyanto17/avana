import actionTypes from "../actionTypes";

const initialState = {
  id: "dashboard",
  isShowed: true,
  isAllowed: true,
};

const dashboard = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.dashboard.SET_SHOW:
      return {
        ...state,
        isShowed: action.value,
      };
    case actionTypes.dashboard.SET_ALLOW:
      return {
        ...state,
        isAllowed: action.value,
      };

    default:
      return state;
  }
};

export default dashboard;
