import { actionType } from "./actionType";

export const initialState = {
  loading: false,
  products: [],
  error: false,
  cart: [],
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case actionType.START:
      return {
        ...state,
        loading: true,
        products: [],
        error: false,
      };
    case actionType.SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: false,
      };
    case actionType.ERROR:
      return {
        ...state,
        loading: false,
        products: [],
        error: true,
      };
    case actionType.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};
