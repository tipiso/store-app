import React, { Fragment } from 'react';
import IconTrash from '@beqom/alto-ui/Icons/Trash';
import TextField from '@beqom/alto-ui/Form/TextField';

export default function CartItem(props){
//   const filteredArray = props.items.filter(el => el.categoryId === props.catId);

  return(
    <tr>
    <td className="Cart__item-cell Cart__item-cell--name">Thing</td>
        <td className="Cart__item-cell">
        <TextField
            id="Cart-item-thing-quantity--thing"
            type="number"
            label="Quantity"
            hideLabel
            value={2}
            small
        />
        </td>
        <td className="Cart__item-cell">$12.00</td>
        <td className="Cart__item-cell">$24.00</td>
        <td className="Cart__item-cell Cart__item-cell--action">
        <IconTrash
            className="Cart__item-remove"
            outline
            onClick={() => console.log('remove no implemented')}
        />
        </td>
  </tr>
  )
}
