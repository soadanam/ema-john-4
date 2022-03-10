import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from './../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect( ()=> {
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    const [cart, setCart] = useState([]);
    const handleCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    };
    const cartReducer = (previous, current) => previous + current.price;
    const total = cart.reduce(cartReducer, 0);
    // console.log('TOTAL:', total)
    return (
        <div className='shop-container'>
            <div className='shop-products'>
            {
                products.map(x => <Product
                    z={x} key={x.key}
                    handleCart={handleCart}> </Product>)
            }
            </div>
            <div className='shop-cart'>
                <Cart cart={cart} total = {total }></Cart>
            </div>
        </div>
    );
};

export default Shop;