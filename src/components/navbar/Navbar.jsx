import React from 'react';
import Card from '../UI/Card';
import './Navbar.css'
import styles from './Navbar.module.css'
import Packages from '../../Pages/Packages/Packages'
import Contact from '../../Pages/Contacts/Contact'
import Dashboard from '../../../dashboard/Dashboard'
import { Link } from "react-router-dom";

const Navbar = (props) => {
    return (
        <Card className="nav">
            <div className="container">
                <div className="logo">Mweb API</div>
                <ul className="links">
                    <li><Link to="/Home/*">Home</Link></li>
                    <li><Link to="/packages">Packages</Link></li>
                    <li><Link to="/contact">Contact</Link></li> 
                    <li><Link to="/login" className={styles.Login}>Login</Link></li>
                </ul>
            </div>
        </Card>
    );
};

export default Navbar;