import React from 'react';
import Card from '../UI/Card';
import './Navbar.css'
import styles from './Navbar.module.css'

const Navbar = (props) => {
    return (
        <Card className="nav">
            <div className="container">
                <div className="logo">Mweb API</div>
                <ul className="links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Packages</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a className={styles.Login} href="#">Login</a></li>
                </ul>
            </div>
        </Card>
    );
};

export default Navbar;