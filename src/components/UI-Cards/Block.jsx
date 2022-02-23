import React from 'react';
import './Block.css'

const Block = (props) => {
    const cardblock = 'cardblock ' + props.className; 
    return (
        <div className={cardblock}>
            {props.children}
        </div>
    );
};

export default Block;