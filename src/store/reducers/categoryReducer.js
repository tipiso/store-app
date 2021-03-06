import { 
    FETCH_CATEGORIES_BEGIN,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE } from '../actions';
  
  const initialState = {
    categories: [],
    catLoading: false,
    catError: null
  };
  
  export default function productReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_CATEGORIES_BEGIN:
        // Mark the state as "loading" so we can show a spinner or something
        // Also, reset any errors. We're starting fresh.
        return {
          ...state,
          catLoading: true,
          catError: null
        };
  
      case FETCH_CATEGORIES_SUCCESS:
        // All done: set loading "false".
        // Also, replace the items with the ones from the server
        return {
          ...state,
          catLoading: false,
          categories: action.payload.categories
        };
  
      case FETCH_CATEGORIES_FAILURE:
        // The request failed. It's done. So set loading to "false".
        // Save the error, so we can display it somewhere.
        // Since it failed, we don't have items to display anymore, so set `items` empty.
        //
        // This is all up to you and your app though:
        // maybe you want to keep the items around!
        // Do whatever seems right for your use case.
        return {
          ...state,
          catLoading: false,
          catError: action.payload.error,
          categories: []
        };
  
      default:
        // ALWAYS have a default case in a reducer
        return state;
    }
  }
