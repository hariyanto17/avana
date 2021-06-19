import actionTypes from "../actionTypes";

const initialState = {
  id: "products",
  isShowed: true,
  isAllowed: true,
  childs: [
    {
      id: "product-allproduct",
      isShowed: true,
      isAllowed: true,
      childs: [
        { id: "product-add", isShowed: true, isAllowed: true },
        { id: "product-import", isShowed: false, isAllowed: false },
      ],
    },
    { id: "product-categories", isShowed: true, isAllowed: true },
    { id: "product-variations", isShowed: true, isAllowed: true },
    { id: "product-collections", isShowed: true, isAllowed: true },
  ],
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.products.SET_SHOW:
      return {
        ...state,
        isShowed: action.value,
      };
    case actionTypes.products.SET_ALLOW:
      return {
        ...state,
        isAllowed: action.value,
      };

    default:
      return state;
  }
};

export default products;
