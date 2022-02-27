import React from 'react';
import './PriceHeading.css'

const PriceHeading = () => {
    return (
        <div className='container cont-help'>
            <h2 
                style={
                    {textTransform: 'capitalize', 
                     fontSize: '35px',
                      fontWeight: 'bold'}
                      }>
                          Price Ranges
                </h2>
        </div>
    );
};

export default PriceHeading;