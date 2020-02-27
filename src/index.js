import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import reducer from './store/reducer';
import '@beqom/alto-ui/scss/index.scss';
import './style.scss';

// const rootReducer = combineReducers({ctr: counterReducer, res: resultReducer})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch({ type: 'ADD_ITEM', payload: {} });
store.dispatch({ type: 'REMOVE_ITEM', payload: {} });

store.subscribe(() => {
  console.log(store.getState());
});


const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(app, document.getElementById('root'));
