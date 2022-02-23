import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Block from '../UI-Cards/Block'
import React from 'react';
import './BlockCard.css'

const BlockCard = (props) => {
return (
<div className="card-grid">
    <div className="container">
        <Block className="block-card__info">
            <div className="product-card__display">
            <h2> card card</h2>
            <p>Unthrottled</p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quo officiis assumenda.
            </p>
            <p>R679pm</p>
            </div>
           <div className="product-btn__upload">
                <a href="#">Read more</a>
           </div>
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
</div>
);
};

export default BlockCard;