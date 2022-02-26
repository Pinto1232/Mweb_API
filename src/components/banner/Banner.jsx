import React from 'react';
import Image from '../assets/mweb-logo.png'
import './Banner.css'

const Banner = () => {
return (
<div className="header-banner">
    <div className="container">
        <div className="big-side__text order-one">
            <h2>CHECKOUT OUR SERVICES PACKAGES</h2>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi optio, libero sapiente doloremque
                dolor
                eveniet ipsam sint hic officia mollitia!
            </p>

            <p className="text-bold">For Only <strong>R450</strong> </p>

        </div>
        <div className="big-side__image order-one">
            <img src={Image} alt="branding" />
        </div>
    </div>
</div>
);
};

export default Banner;