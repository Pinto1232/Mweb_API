import React from 'react';
import PriceHeading from '../headingPrice/PriceHeading';
import Card from '../UI/Card';
import './Table.css'

const Table = () => {
return (
<div className='main-card-form'>
    <Card className="container">
        <div className="input-content__items">
            <label>
                <input type="radio" name="choice" value="Java" />R0 - R699
            </label>
        </div>

        <div className="input-content__items">
            <label>
                <input type="radio" name="choice" value="Java" /> R700 - R999
            </label>
        </div>

        <div className="input-content__items">
            <label>
                <input type="radio" name="choice" value="Java" /> R1000
            </label>
        </div>

        <div className="input-content__items">
            <label>
                <input type="radio" name="choice" value="Java" /> R20000
            </label>
        </div>

        <div className="input-content__items">
            <label>
                <input type="radio" name="choice" value="Java" /> R3000+
            </label>
        </div>
    </Card>
</div>
);
};

export default Table;