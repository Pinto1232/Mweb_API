import React from 'react';
import Card from '../UI/Card';
import './Table.css'

const Table = () => {
return (
<div className='main-card-form'>
    <Card className="container">
        <div className="input-content__items">
            <label>
                <input type="radio" name="choice" value="Java" /> Learn JavaScript
            </label>
        </div>

        <div className="input-content__items">
            <label>
                <input type="radio" name="choice" value="Java" /> Learn JavaScript
            </label>
        </div>

        <div className="input-content__items">
            <label>
                <input type="radio" name="choice" value="Java" /> Learn JavaScript
            </label>
        </div>

        <div className="input-content__items">
            <label>
                <input type="radio" name="choice" value="Java" /> Learn JavaScript
            </label>
        </div>

        <div className="input-content__items">
            <label>
                <input type="radio" name="choice" value="Java" /> Learn JavaScript
            </label>
        </div>
    </Card>
</div>
);
};

export default Table;