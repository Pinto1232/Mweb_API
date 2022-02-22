import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="nav">
            <div className="container">
                <div className="logo">Mweb API</div>
                <ul className="links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Packages</a></li>
                    <li><a href="#">Prices</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;