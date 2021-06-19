import actionTypes from '../actionTypes';

const initialState = {
  visible: false
};

const loading = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.loading.SET_LOADING:
      return {
        ...state,
        visible: action.value
      };
    default:
      return state;
  }
};

export default loading;
