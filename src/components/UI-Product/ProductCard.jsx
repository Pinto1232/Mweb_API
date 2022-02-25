import React from 'react';
import './ProductCard.css'

const ProductCard = (props) => {
    const prodClasses = 'productCard ' + props.className;

    return (
        <div className={prodClasses}>
            {props.children}
        </div>
    );
};

export default ProductCard;