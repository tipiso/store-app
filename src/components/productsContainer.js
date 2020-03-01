import React, { Fragment } from 'react';
import Product from './product';
import List from '@beqom/alto-ui/List';

export default function ProductsContainer(props) {
  const filteredArray = props.items.filter(el => {
    if (el.categoryId === props.catId && el.name.toLowerCase().includes(props.searchValue.toLowerCase())) return true
    else return false;
  });
  let filteredProducts = [];

  filteredProducts = filteredArray.filter(product => {
    return !props.cart.some(cartItem => {
      return product.id === cartItem.productId;
    })
  })

  return (
    <Fragment>
      {filteredProducts.length !== 0 ?
        <Fragment>
          <h3 className="Title Title--category">{props.catName}</h3>
          <List className="Products" items={filteredProducts}>
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