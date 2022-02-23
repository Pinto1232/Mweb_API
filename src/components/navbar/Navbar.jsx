import React from 'react';
import Card from '../UI/Card';
import './Navbar.css'

const Navbar = (props) => {
    return (
        <Card className="nav">
            <div className="container">
                <div className="logo">Mweb API</div>
                <ul className="links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Packages</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </Card>
    );
};

export default Navbar;