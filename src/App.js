import React, { Fragment } from 'react';
import TextField from '@beqom/alto-ui/Form/TextField';
import List from '@beqom/alto-ui/List';
import Button from '@beqom/alto-ui/Button';
import IconTrash from '@beqom/alto-ui/Icons/Trash';
import { connect } from 'react-redux';
import * as actionTypes from './store/actions';

class App extends React.Component {
  state = {

  }

  render() {
    //this.props.items zamiast this.state.items
    //this.props.onDeleteItem zamiast clicked={() => this.deleteItem}
    return (
      <div className="App">
        <div className="Main">
          <h2 className="Title">Products</h2>
          <TextField id="search" label="Search" className="Search" />
          <h3 className="Title Title--category">Category 1</h3>
          <List
            className="Products"
            items={[
              { id: '1', title: 'Foo' },
              { id: '2', title: 'Bar' },
              { id: '3', title: 'Baz' },
            ]}
          >
            {item => (
              <Fragment>
                <div className="Product__name">{item.title}</div>
                <div className="Product__price">$5.00</div>
                <Button outline small>
                  add to cart
                </Button>
              </Fragment>
            )}
          </List>
          <h3 className="Title Title--category">Category 2</h3>
          <List className="Products" items={[{ id: '4', title: 'One' }, { id: '5', title: 'Two' }]}>
            {item => (
              <Fragment>
                <div className="Product__name">{item.title}</div>
                <div className="Product__discount">-50%</div>
                <div className="Product__price Product__price--old">$10.00</div>
                <div className="Product__price">$5.00</div>
                <Button outline small>
                  add to cart
                </Button>
              </Fragment>
            )}
          </List>
        </div>
        <aside className="Cart">
          <h2 className="Title">Cart</h2>
          <table className="Cart__items">
            <thead>
              <tr>
                <th className="Cart__items-header Cart__items-header--name">Products</th>
                <th className="Cart__items-header Cart__items-header--quantity">QY</th>
                <th className="Cart__items-header Cart__items-header--unit-price">U/P</th>
                <th className="Cart__items-header Cart__items-header--evaluated-total-price">
                  ETP
                </th>
                <th className="Cart__items-header Cart__items-header--action" />
              </tr>
            </thead>
            <tbody>
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
              <tr>
                <td className="Cart__item-cell Cart__item-cell--name">Stuff</td>
                <td className="Cart__item-cell">
                  <TextField
                    id="Cart-item-thing-quantity--stuff"
                    type="number"
                    label="Quantity"
                    hideLabel
                    value={10}
                    small
                  />
                </td>
                <td className="Cart__item-cell">$5.00</td>
                <td className="Cart__item-cell">$50.00</td>
                <td className="Cart__item-cell Cart__item-cell--action">
                  <IconTrash
                    className="Cart__item-remove"
                    outline
                    onClick={() => console.log('remove no implemented')}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="Total">
            <div className="Total__title">TOTAL:</div>
            <div className="Total__amount">$74.00</div>
          </div>
          <div className="Checkout-button">
            <Button onClick={this.props.onStoreResult}>Checkout</Button>
            <div onClick={this.props.onDeleteStoreResult}>
              {this.props.storedItems.map(el => <li onClick={() => this.props.onDeleteItem(el.id)}>{el}</li>)}
            </div>
          </div>
        </aside>
      </div>
    );
  }
}

const mapStateToProps = state => {
  //z combinedReducers trzeba sie dostawac np. przez state.<nazwaobiekutreducera>.items
  // 
  return {
    storedItems: state.items,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteItem: () => dispatch({ type: actionTypes.DELETE, payload: {} }),
    getProducts: () => dispatch({ type: 'GET_PRODUCTS' }),
    getProductsCategories: () => dispatch({ type: 'GET_CATEGORIES' }),
    getCart: () => dispatch({ type: 'GET_CART' }),
    onStoreResult: () => dispatch({ type: 'STORE_RESULT', payload: { items: [] } }),
    onDeleteStoreResult: (id) => dispatch({ type: 'STORE_RESULT', id })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
