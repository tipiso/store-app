import React, { Fragment } from 'react';
import Button from '@beqom/alto-ui/Button';
import CartItem from './cartItem';
import { connect } from 'react-redux';
import { postCart } from "../store/cart/cartActions";

function CartContainer(props) {
  const { cart, products, loading } = props;
  let totalPrice = 0;
  let product = {};

  cart.forEach(cartItem => {
    product = products.find(product => product.id === cartItem.productId);
    if (product.discount) {
      let discountPrice = product.price - (product.price * product.discount);
      totalPrice += discountPrice * cartItem.quantity;
    } else totalPrice += product.price * cartItem.quantity;
  });

  return (
    <aside className="Cart">
      <h2 className="Title">Cart</h2>
      {cart.length !== 0 ?
        <Fragment>
          <table className="Cart__items">
            <thead>
              <tr>
                <th className="Cart__items-header Cart__items-header--name">Products</th>
                <th className="Cart__items-header Cart__items-header--quantity">QY</th>
                <th className="Cart__items-header Cart__items-header--unit-price">U/P</th>
                <th className="Cart__items-header Cart__items-header--evaluated-total-price">ETP</th>
                <th className="Cart__items-header Cart__items-header--action" />
              </tr>
            </thead>
            <tbody>
              {!loading && cart.map(product => <CartItem
                key={product.productId}
                productId={product.productId}
                quantity={product.quantity}
              />)}
            </tbody>
          </table>
          <div className="Total">
            <div className="Total__title">TOTAL:</div>
            <div className="Total__amount">${Number(totalPrice).toFixed(2)}</div>
          </div>
          <div className="Checkout-button">
            <Button onClick={() => props.dispatch(postCart(cart))}>Checkout</Button>
          </div>
        </Fragment>
        : <h3>No items has been added</h3>
      }
    </aside>
  )
}

const mapStateToProps = state => {
  return {
    products: state.products.items,
    error: state.products.error,
    loading: state.products.loading
  };
};

export default connect(mapStateToProps)(CartContainer);
