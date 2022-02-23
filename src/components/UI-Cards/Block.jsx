import React from 'react';
import './Block.css'

const Block = (props) => {
    const classess = 'cardblock ' + props.className; 
    return (
        <div className={classess}>
            {props.children}
        </div>
    );
};

export default Block;