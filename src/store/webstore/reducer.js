import actionTypes from "../actionTypes";

const initialState = {
  id: "webstore",
  isShowed: true,
  isAllowed: true,
  childs: [
    {
      id: "settings",
      isShowed: true,
      isAllowed: true,
      childs: [
        {
          id: "webstore-domain",
          isShowed: true,
          isAllowed: true,
          childs: [
            { id: "default-domain", isShowed: true, isAllowed: true },
            { id: "custom-domain", isShowed: true, isAllowed: false },
            {
              id: "request-custom-domain",
              isShowed: false,
              isAllowed: false,
            },
          ],
        },
        { id: "webstore-logo", isShowed: true, isAllowed: true },
        {
          id: "webstore-profile-photo",
          isShowed: true,
          isAllowed: true,
        },
        { id: "webstore-slider", isShowed: true, isAllowed: true },
        {
          id: "webstore-mobile-friendly",
          isShowed: true,
          isAllowed: true,
        },
        { id: "infinite-scroll", isShowed: true, isAllowed: true },
        {
          id: "home-page-product-display",
          isShowed: true,
          isAllowed: false,
        },
        { id: "show-filter-control", isShowed: true, isAllowed: false },
      ],
    },
    { id: "google-analytic", isShowed: true, isAllowed: true },
    { id: "themes", isShowed: true, isAllowed: true },
    { id: "pages", isShowed: true, isAllowed: true },
    { id: "seo", isShowed: true, isAllowed: true },
    {
      id: "checkout-additional-info",
      isShowed: true,
      isAllowed: false,
    },
    { id: "store-newsletter", isShowed: true, isAllowed: false },
  ],
};

const webstore = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.webstore.SET_SHOW:
      return {
        ...state,
        isShowed: action.value,
      };
    case actionTypes.webstore.SET_ALLOW:
      return {
        ...state,
        isAllowed: action.value,
      };

    default:
      return state;
  }
};

export default webstore;
