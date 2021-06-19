import actionTypes from "../actionTypes";

const initialState = {   
    "id": "hq",
    "isShowed": false,
    "isAllowed": false,
    "childs": [
        { "id": "hq_stockist", "isShowed": false, "isAllowed": false },
        { "id": "hq_dropship_affiliate", "isShowed": false, "isAllowed": false }
    ]
};

const hq = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.hq.SET_SHOW:
        return {
          ...state,
          isShowed: action.value,
        };
      case actionTypes.hq.SET_ALLOW:
        return {
          ...state,
          isAllowed: action.value,
        };
  
      default:
        return state;
    }
  };
  
  export default hq;