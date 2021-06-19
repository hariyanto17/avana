import actionTypes from "../actionTypes";

const initialState = { "id": "orders", "isShowed": true, "isAllowed": true };

const orders = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.orders.SET_SHOW:
      return {
        ...state,
        isShowed: action.value,
      };
    case actionTypes.orders.SET_ALLOW:
      return {
        ...state,
        isAllowed: action.value,
      };

    default:
      return state;
  }
};

export default orders;
