import React, { Fragment } from 'react';
import Button from '@beqom/alto-ui/Button';
import { handleAddProduct } from "../store/cart/cartActions";
import { connect } from 'react-redux';

function Product(props) {
  const { price, id, discount, name } = props;
  let productPrice = 0;
  if (props.discount) {
    productPrice = price - (price * discount);
  } else productPrice = price;

  return (
    <Fragment>
      <div className="Product__name">{name}</div>
      <div>
        <div className="Product__price">${price}</div>
        {discount &&
          <div className="Product__price--discount">${productPrice}</div>
        }
      </div>
      <Button
        onClick={() => props.dispatch(handleAddProduct(id))}
        id={id}
        outline
        small>
        add to cart
            </Button>
    </Fragment>
  )
}

export default connect(null)(Product);