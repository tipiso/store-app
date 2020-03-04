import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  HANDLE_FILTER_PRODUCTS,
} from '../actions';

const initialState = {
  items: [],
  loading: false,
  error: null,
  searchPhrase: ""
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case HANDLE_FILTER_PRODUCTS:
      return {
        ...state,
        searchPhrase: action.payload.searchPhrase
      }
    case FETCH_PRODUCTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.products
      };

    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };

    default:
      return state;
  }
}
