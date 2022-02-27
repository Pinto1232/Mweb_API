import React from 'react'
import './Product.css'

export default function Product(props) {
const { product } = props;
return (
<div className='product_display__list'>
 
        <div className="table-container">
            <div className="table-row heading">
                <h4 className="row-item"><strong>Fibre products Name</strong></h4>
            </div>
            <div className="table-row">
                <div className="row-item">{product.productName}</div>
            </div>
          
        </div>
</div>
);
}