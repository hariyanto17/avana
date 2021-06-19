import actionTypes from "../actionTypes";

const initialState = {
  id: "settings",
  isShowed: true,
  isAllowed: true,
  childs: [
    { id: "shop-manager", isShowed: false, isAllowed: false },
    { id: "store-information", isShowed: true, isAllowed: true },
    {
      id: "shipping",
      isShowed: true,
      isAllowed: true,
      childs: [
        {
          id: "couriers",
          isShowed: true,
          isAllowed: true,
          childs: [
            { id: "poslaju", isShowed: false, isAllowed: false },
            {
              id: "poslaju_international",
              isShowed: false,
              isAllowed: false,
            },
            { id: "citylink", isShowed: false, isAllowed: false },
            { id: "flexipack", isShowed: false, isAllowed: false },
            { id: "janio", isShowed: true, isAllowed: false },
            {
              id: "jne_domestic_regular",
              isShowed: true,
              isAllowed: true,
            },
            { id: "shipper", isShowed: true, isAllowed: false },
          ],
        },
      ],
    },
    {
      id: "payment",
      isShowed: true,
      isAllowed: true,
      childs: [
        { id: "avapay", isShowed: true, isAllowed: true },
        { id: "credit-card", isShowed: true, isAllowed: false },
        { id: "paypal", isShowed: false, isAllowed: false },
        { id: "molpay", isShowed: false, isAllowed: false },
        { id: "manual-payment", isShowed: true, isAllowed: false },
      ],
    },
    { id: "invoicing", isShowed: true, isAllowed: true },
    { id: "developer", isShowed: true, isAllowed: false },
    { id: "tax-information", isShowed: true, isAllowed: true },
  ],
};

const settings = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.settings.SET_SHOW:
      return {
        ...state,
        isShowed: action.value,
      };
    case actionTypes.settings.SET_ALLOW:
      return {
        ...state,
        isAllowed: action.value,
      };

    default:
      return state;
  }
};

export default settings;
