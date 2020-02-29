import React, { Fragment } from 'react';
import TextField from '@beqom/alto-ui/Form/TextField';
import ProductsContainer from './components/productsContainer';
import CartContainer from './components/cartContainer';
import ErrorBoundary from './ErrorBoundary';
import { connect } from 'react-redux';
import { fetchProducts } from "./store/products/productsActions";
import { fetchCategories } from "./store/categories/categoriesActions";
import { fetchCart } from "./store/cart/cartActions";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCategories());
    this.props.dispatch(fetchProducts());
    this.props.dispatch(fetchCart());
  }

  render() {
    const { error, loading, catError, catLoading, products, categories, cart, cartLoading } = this.props;
    //this.props.items zamiast this.state.items
    //this.props.onDeleteItem zamiast clicked={() => this.deleteItem}
    console.log(categories, products, cart, cartLoading);
    return (
      <div className="App">
        <div className="Main">
          <h2 className="Title">Products</h2>
          <TextField id="search" label="Search" className="Search" />
          {categories.map(el => !loading && <ProductsContainer
            key={el.id}
            catId={el.id}
            catName={el.name}
            items={products}
          />)}
        </div>
        <ErrorBoundary>
          {!cartLoading && !loading && <CartContainer products={products} cart={cart} />}
        </ErrorBoundary>
      </div>
    );
  }
}
//z combinedReducers trzeba sie dostawac np. przez state.<nazwaobiekutreducera>.items
const mapStateToProps = state => {
  return {
    products: state.products.items,
    loading: state.products.loading,
    error: state.products.error,
    categories: state.categories.categories,
    catLoading: state.categories.catLoading,
    catError: state.categories.error,
    cart: state.cart.cart,
    cartLoading: state.cart.loading,
    cartError: state.cart.error
  };
};

// const mapDispatchToProps = dispatch => {
//   return {  
//     onDeleteItem: () => dispatch({ type: actionTypes.DELETE, payload: {} }),
//     getProducts: () => dispatch({ type: 'GET_PRODUCTS' }),
//     getProductsCategories: () => dispatch({ type: 'GET_CATEGORIES' }),
//     getCart: () => dispatch({ type: 'GET_CART' }),
//     onStoreResult: () => dispatch({ type: 'STORE_RESULT', payload: { items: [] } }),
//     onDeleteStoreResult: (id) => dispatch({ type: 'STORE_RESULT', id })
//   };
// };

export default connect(mapStateToProps)(App);
