import React from 'react';
import TextField from '@beqom/alto-ui/Form/TextField';
import ProductsContainer from './components/productsContainer';
import CartContainer from './components/cartContainer';
import ErrorBoundary from './ErrorBoundary';
import { connect } from 'react-redux';
import { fetchProducts } from "./store/products/productsActions";
import { fetchCategories } from "./store/categories/categoriesActions";
import { fetchCart } from "./store/cart/cartActions";

class App extends React.Component {
  state = {
    searchValue: '',
  }
  handleChange = (e) => {
    this.setState({ searchValue: e.target.value })
  }
  componentDidMount() {
    this.props.dispatch(fetchCategories());
    this.props.dispatch(fetchProducts());
    this.props.dispatch(fetchCart());
  }

  render() {
    const { error, loading, catError, catLoading, products, categories, cart, cartLoading } = this.props;

    return (
      <div className="App">
        <div className="Main">
          <h2 className="Title">Products</h2>
          <TextField
            id="search"
            label="Search"
            className="Search"
            onChange={(e) => this.handleChange(e)}
          />
          {categories.map(el => !loading && <ProductsContainer
            key={el.id}
            catId={el.id}
            catName={el.name}
            items={products}
            cart={cart}
            searchValue={this.state.searchValue}
          />)}
        </div>
        <ErrorBoundary>
          {!cartLoading && !loading &&
            <CartContainer
              products={products}
              cart={cart} />}
        </ErrorBoundary>
      </div>
    );
  }
}

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

export default connect(mapStateToProps)(App);
