import React, { Fragment } from 'react';
import Button from '@beqom/alto-ui/Button';

 export default function product(props){

    return(
        <Fragment>
            <div className="Product__name">{props.name}</div>
            <div className="Product__price">{props.price}</div>
            <Button outline small>
            add to cart
            </Button>
      </Fragment>
    )
  }