import actionTypes from "../actionTypes";

const initialState = {
  "id": "agent",
  "isShowed": true,
  "isAllowed": false,
  "childs": [{ "id": "my_purchase", "isShowed": true, "isAllowed": true }]
};

const agent = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.agent.SET_SHOW:
      return {
        ...state,
        isShowed: action.value,
      };
    case actionTypes.agent.SET_ALLOW:
      return {
        ...state,
        isAllowed: action.value,
      };

    default:
      return state;
  }
};

export default agent;
