import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import products from './store/reducers/productReducer';
import categories from './store/reducers/categoryReducer';
import cart from './store/reducers/cartReducer';
import '@beqom/alto-ui/scss/index.scss';
import './style.scss';

const rootReducer = combineReducers({products, categories, cart});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

// store.subscribe(() => {
//   console.log(store.getState());
// });

// console.log(process.env.REACT_APP_API_URL);
// function App(){
//   return(
//     <div className="App">
//       <App />
//     </div>
//   );
// };

render(
<Provider store={store}>
  <App />
</Provider>,
 document.getElementById('root'));
