import React from 'react';
import IconTrash from '@beqom/alto-ui/Icons/Trash';
import TextField from '@beqom/alto-ui/Form/TextField';
import { connect } from 'react-redux';
import { handleCartDelete } from "../store/cart/cartActions";
import { handleCartItemUpdate } from "../store/cart/cartActions";

function CartItem(props) {
  const product = props.products.find(el => el.id === props.productId);
  let productPrice = 0;

  if (product.discount) {
    productPrice = props.quantity * (product.price - product.price * product.discount);
  } else productPrice = props.quantity * product.price;

  return (
    <tr>
      <td className="Cart__item-cell Cart__item-cell--name">{product.name}</td>
      <td className="Cart__item-cell">
        <TextField
          id={`${product.id}`}
          onChange={(event) => props.dispatch(handleCartItemUpdate(event))}
          type="number"
          label="Quantity"
          hideLabel
          value={props.quantity}
          small
        />
      </td>
      <td className="Cart__item-cell">${Number(product.price).toFixed(2)}</td>
      <td className="Cart__item-cell">${Number(productPrice).toFixed(2)}</td>
      <td className="Cart__item-cell Cart__item-cell--action">
        <IconTrash
          id={product.id}
          className="Cart__item-remove"
          outline
          onClick={() => props.dispatch(handleCartDelete(product.id))}
        />
      </td>
    </tr>
  )
}

const mapStateToProps = state => {
  return {
    products: state.products.items,
    error: state.cart.error,
    loading: state.cart.loading
  };
};

export default connect(mapStateToProps)(CartItem);
