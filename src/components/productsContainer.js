import React, { Fragment } from 'react';
import Product from './product';
import List from '@beqom/alto-ui/List';

export default function ProductsContainer(props){
  const filteredArray = props.items.filter(el => el.categoryId === props.catId);

  return(
    <Fragment>
      <h3 className="Title Title--category">{props.catName}</h3>
      <List className="Products" items={filteredArray}>
        {item => (
          <Product price={item.price} name={item.name}/>
        )}
    </List>
  </Fragment>
  )
}