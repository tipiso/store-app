import React, { Fragment } from 'react';
import Button from '@beqom/alto-ui/Button';
import { handleAddProduct } from "../store/cart/cartActions";
import { connect } from 'react-redux';

function Product(props) {
  let productPrice = 0;
  if (props.discount) {
    productPrice = props.price - (props.price * props.discount);
  } else productPrice = props.price;

  return (
    <Fragment>
      <div className="Product__name">{props.name}</div>
      <div>
        <div className="Product__price">${props.price}</div>
        {props.discount &&
          <div className="Product__price--discount">${productPrice}</div>
        }
      </div>
      <Button
        onClick={() => props.dispatch(handleAddProduct(props.id))}
        id={props.id}
        outline
        small>
        add to cart
            </Button>
    </Fragment>
  )
}

export default connect(null)(Product);