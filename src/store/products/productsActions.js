import * as actionTypes from '../actions';

export function fetchProducts() {
    return dispatch => {
      dispatch(fetchProductsBegin());
      return fetch(`${process.env.REACT_APP_API_URL}/products`)
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchProductsSuccess(json.products));
          return json.products;
        })
        .catch(error => dispatch(fetchProductsFailure(error)));
    };
  }
  
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

export const fetchProductsBegin = () => ({
  type: actionTypes.FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
  type: actionTypes.FETCH_PRODUCTS_SUCCESS,
  payload: { products }
});

export const fetchProductsFailure = error => ({
  type: actionTypes.FETCH_PRODUCTS_FAILURE,
  payload: { error }
});