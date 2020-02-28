import * as actionTypes from '../actions';

export function fetchCategories() {
    return dispatch => {
      dispatch(fetchCategoriesBegin());
      return fetch(`${process.env.REACT_APP_API_URL}/categories`)
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchCategoriesSuccess(json.categories));
          return json.categories;
        })
        .catch(error => dispatch(fetchCategoriesFailure(error)));
    };
  }
  
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

export const fetchCategoriesBegin = () => ({
  type: actionTypes.FETCH_CATEGORIES_BEGIN
});

export const fetchCategoriesSuccess = categories => ({
  type: actionTypes.FETCH_CATEGORIES_SUCCESS,
  payload: { categories }
});

export const fetchCategoriesFailure = error => ({
  type: actionTypes.FETCH_CATEGORIES_FAILURE,
  payload: { error }
});