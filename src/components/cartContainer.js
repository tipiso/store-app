import React, { useState } from 'react';
import Button from '@beqom/alto-ui/Button';
import CartItem from './cartItem';

 export default function CartContainer(props){
    const [totalPrice, setPrice] = useState(0);
    console.log(props.cart);

    return(
        <aside className="Cart">
          <h2 className="Title">Cart</h2>
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
              {/* {props.cart.map(product => <CartItem 
              productId={product.price}
              quantity={product.name}
              />)}                */}
            </tbody>
          </table>
          <div className="Total">
            <div className="Total__title">TOTAL:</div>
            <div className="Total__amount">$74.00</div>
          </div>
          <div className="Checkout-button">
            <Button >Checkout</Button>
          </div>
        </aside>
    )
  }