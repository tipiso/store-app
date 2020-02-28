import * as actionTypes from '../actions';

export function fetchCart() {
    return dispatch => {
      dispatch(fetchCartBegin());
      return fetch(`${process.env.REACT_APP_API_URL}/cart`)
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchCartSuccess(json.cart));
          return json.cart;
        })
        .catch(error => dispatch(fetchCartFailure(error)));
    };
  }
  
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

export const fetchCartBegin = () => ({
  type: actionTypes.FETCH_CART_BEGIN
});

export const fetchCartSuccess = cart => ({
  type: actionTypes.FETCH_CART_SUCCESS,
  payload: { cart }
});

export const fetchCartFailure = error => ({
  type: actionTypes.FETCH_CART_FAILURE,
  payload: { error }
});