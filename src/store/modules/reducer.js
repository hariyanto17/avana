import actionTypes from "../actionTypes";

const initialState = {
  id: "modules",
  isShowed: true,
  isAllowed: true,
  childs: [
    { id: "all-module", isShowed: true, isAllowed: true },
    { id: "google-shopping", isShowed: true, isAllowed: true },
    { id: "coupon-code", isShowed: true, isAllowed: true },
    {
      id: "facebook",
      isShowed: true,
      isAllowed: true,
      childs: [
        { id: "facebook-marketing", isShowed: true, isAllowed: false },
        {
          id: "facebook-page",
          isShowed: true,
          isAllowed: true,
          childs: [
            { id: "fb-link-to-page", isShowed: true, isAllowed: true },
            { id: "fb-unlink-page", isShowed: true, isAllowed: true },
            {
              id: "fb-change-adaccount",
              isShowed: true,
              isAllowed: true,
            },
            { id: "fb-shop", isShowed: true, isAllowed: true },
            { id: "auto-pm-order", isShowed: true, isAllowed: true },
          ],
        },
        {
          id: "facebook-fanpage-autorepy",
          isShowed: false,
          isAllowed: false,
        },
      ],
    },
    {
      id: "instagram",
      isShowed: true,
      isAllowed: true,
      childs: [
        { id: "instagram-connect", isShowed: true, isAllowed: true },
        {
          id: "instagram-comment-order",
          isShowed: false,
          isAllowed: false,
        },
      ],
    },
    {
      id: "messenger",
      isShowed: true,
      isAllowed: true,
      childs: [
        { id: "messenger-settings", isShowed: true, isAllowed: false },
        { id: "messenger-blast", isShowed: true, isAllowed: false },
      ],
    },
    { id: "blogspot", isShowed: true, isAllowed: true },
    { id: "twitter", isShowed: true, isAllowed: true },
    { id: "whatsapp", isShowed: true, isAllowed: true },
    { id: "avacredit", isShowed: false, isAllowed: false },
    { id: "avachat", isShowed: false, isAllowed: false },
  ],
};

const modules = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.modules.SET_SHOW:
      return {
        ...state,
        isShowed: action.value,
      };
    case actionTypes.modules.SET_ALLOW:
      return {
        ...state,
        isAllowed: action.value,
      };

    default:
      return state;
  }
};

export default modules;
