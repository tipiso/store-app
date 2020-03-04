import React from 'react';
import ProductsContainer from './components/productsContainer';
import CartContainer from './components/cartContainer';
import ErrorBoundary from './ErrorBoundary';
import { connect } from 'react-redux';
import { fetchProducts } from "./store/products/productsActions";
import { fetchCategories } from "./store/categories/categoriesActions";
import { fetchCart } from "./store/cart/cartActions";
import SearchBar from "./components/searchBar";
 
class App extends React.PureComponent {
  // state = {
  //   searchValue: '',
  // }
  // handleChange = (e) => {
  //   this.setState({ searchValue: e.target.value })
  // }
  componentDidMount() {
    this.props.dispatch(fetchCategories());
    this.props.dispatch(fetchProducts());
    this.props.dispatch(fetchCart());
  }

  render() {
    const { loading, categories, cartLoading } = this.props;

    return (
      <div className="App">
        <div className="Main">
          <h2 className="Title">Products</h2>
          <SearchBar />
          {categories.map(el => !loading && <ProductsContainer
            key={el.id}
            catId={el.id}
            catName={el.name}
          />)}
        </div>
        <ErrorBoundary>
          {!cartLoading && !loading &&
            <CartContainer />}
        </ErrorBoundary>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.products.loading,
    categories: state.categories.categories,
    cartLoading: state.cart.loading,
  };
};

export default connect(mapStateToProps)(App);
