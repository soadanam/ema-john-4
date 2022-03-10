import React from 'react';
import logoImage from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header-class'>
            <div className="image-div">
                <img src={logoImage} alt="" />
            </div>
            <div className="nav-div">
                <nav>
                    <a href="#">Shop</a>
                    <a href="#">Order Review</a>
                    <a href="#">Manage Inventory here</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;