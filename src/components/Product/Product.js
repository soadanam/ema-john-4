import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log('Props?', props.handleCart)

    const { name, img, price, seller, star, stock } = props.z;
    return (
        <div className='productDiv'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-details'>
                <h4 className='productName'>{name}</h4>
                <p>by: {seller} </p>
                <h5 className='old-price'>${price + 11}</h5>
                <h5>${price}</h5>
                <p>only {stock} left in stock - order soon</p>
                <button onClick={()=> props.handleCart(props.z)} className='common-purchase'> <i className="fa-solid fa-cart-shopping"></i> add to cart</button>
            </div>
        </div>
    );
};

export default Product;