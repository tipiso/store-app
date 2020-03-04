import React, { Fragment, useMemo } from 'react';
import Product from './product';
import { connect } from 'react-redux';
import List from '@beqom/alto-ui/List';

function ProductsContainer(props) {
  const { products, searchValue, catId, catName, cart } = props;

  const filteredArray = products.filter(el => {
    if (el.categoryId === catId && el.name.toLowerCase().includes(searchValue.toLowerCase())) return true
    else return false;
  }).filter(product => {
    return !cart.some(cartItem => {
      return product.id === cartItem.productId;
  })});

  return (
    <Fragment>
      {filteredArray.length !== 0 ?
        <Fragment>
          <h3 className="Title Title--category">{catName}</h3>
          <List className="Products" items={filteredArray}>
            {item => (
              <Product
                id={item.id}
                price={item.price}
                name={item.name}
                discount={item.discount}
              />
            )}
          </List>
        </Fragment>
        : null
      }
    </Fragment>
  )
}
const mapStateToProps = state => {
  return {
    products: state.products.items,
    categories: state.categories.categories,
    cart: state.cart.cart,
    searchValue: state.products.searchPhrase
  };
}
export default connect(mapStateToProps)(React.memo(ProductsContainer));