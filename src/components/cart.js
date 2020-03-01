import React, { Fragment } from 'react';
import Button from '@beqom/alto-ui/Button';
import { connect } from 'react-redux';
// export default connect(mapStateToProps)(App);
function Product(props) {
  const { name, price } = props;
  return (
    <Fragment>
      <div className="Product__name">{name}</div>
      <div className="Product__price">{price}</div>
      <Button outline small>
        add to cart
            </Button>
    </Fragment>
  )
}

const mapStateToProps = state => {
  return {
    products: state.products.items,
  };
};

export default connect(mapStateToProps)(Product);