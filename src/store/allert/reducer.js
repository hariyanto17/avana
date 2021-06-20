import actionTypes from "../actionTypes";

const initialState = {
  visible: false,
};

const allert = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.allert.SET_ALLERT:
      return {
        ...state,
        visible: action.value,
      };
    default:
      return state;
  }
};

export default allert;
