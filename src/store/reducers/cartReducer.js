import {
  FETCH_CART_BEGIN,
  FETCH_CART_SUCCESS,
  FETCH_CART_FAILURE,
  DELETE_CART_ITEM,
  CHANGE_CART_ITEM_QUANTITY,
  HANDLE_ADD_PRODUCT
} from '../actions';

const initialState = {
  cart: [],
  loading: false,
  error: null
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case HANDLE_ADD_PRODUCT:
      return {
        ...state,
        cart: action.payload.cart
      };
    case CHANGE_CART_ITEM_QUANTITY:
      return {
        ...state,
        cart: action.payload.cart
      };
    case DELETE_CART_ITEM:
      return {
        ...state,
        cart: action.payload.cart
      };
    case FETCH_CART_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: action.payload.cart
      };

    case FETCH_CART_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        cart: []
      };

    default:
      return state;
  }
}
