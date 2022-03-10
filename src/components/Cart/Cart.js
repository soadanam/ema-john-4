import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props)
    const tax = props.total*15/100;

    return (
        <div className='cart-container'>
            <h3 className='summery'>Order Summery</h3>
            <h4>Items: {props.cart.length}</h4>
            <h4>Sub total: ${props.total.toFixed(2)}</h4>
            <h4>Tax: ${tax.toFixed(2)} </h4>
            <h4>Grand total: ${Math.ceil(props.total + tax).toFixed(0)} </h4>
        </div>
    );
};

export default Cart;