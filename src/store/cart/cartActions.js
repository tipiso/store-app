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

export function handleCartDelete(id) {
  return (dispatch, getState) => {
    const cartArray = getState().cart.cart;
    const filteredArray = cartArray.filter(product => product.productId !== id);
    dispatch(deleteCartItem(filteredArray));
  }
}

export function postCart(cart) {
  console.log(cart);
  return dispatch => {
    dispatch(postCartBegin());
    return fetch(`${process.env.REACT_APP_API_URL}/checkout`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cart)
    })
      .then(handleErrors)
      .then(res => res.json())
      .then(data => {
        dispatch(postCartSuccess(data.cart));
        console.log(data, 'kliknieto');
      })
      .catch(error => dispatch(postCartFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const deleteCartItem = cart => ({
  type: actionTypes.DELETE_CART_ITEM,
  payload: { cart }
});

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

export const postCartBegin = () => ({
  type: actionTypes.POST_CART_BEGIN
});

export const postCartSuccess = response => ({
  type: actionTypes.POST_CART_SUCCESS,
  payload: { response }
});

export const postCartFailure = error => ({
  type: actionTypes.POST_CART_FAILURE,
  payload: { error }
});