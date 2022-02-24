import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Block from '../UI-Cards/Block'
import React from 'react';
import './BlockCard.css'
import PriceHeading from '../headingPrice/PriceHeading';

const BlockCard = (props) => {
return (
<div className="card-grid">
<div className="container">
           <div className="menu">
                <ul>
                    <li>
                        <a href="#">Filter By:</a>
                        <ul>
                            <li><a href="#">Price</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
           </div>
    <div className="container">
        <Block className="block-card__info">
            <h2> card card</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quo officiis assumenda.
            </p>
            <a href="#">Read more</a>
        </Block>

        <Block className="block-card__info">
            <h2><img src="" alt="" /> div card</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quo officiis assumenda.
            </p>
            <a href="#">Read more</a>
        </Block>

        <Block className="block-card__info">
            <h2><img src="" alt="" /> div card</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quo officiis assumenda.
            </p>
            <a href="#">Read more</a>
        </Block>
        </div>
        <PriceHeading />
</div>
);
};

export default BlockCard;