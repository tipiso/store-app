import React from 'react';
import TextField from '@beqom/alto-ui/Form/TextField';
import { connect } from 'react-redux';
import { handleFilterProducts } from "../store/products/productsActions";

function SearchBar(props){
    function handleChange(e){
        const value = e.target.value;
        props.dispatch(handleFilterProducts(value));
    }
    // onChange={(event) => props.dispatch(handleCartItemUpdate(event))}
    return(
        <TextField
        id="search"
        label="Search"
        className="Search"
        onChange={(e) => handleChange(e)}
  />)
}

export default connect(null)(SearchBar);