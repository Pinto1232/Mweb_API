import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Block from '../UI-Cards/Block'
import Card from '../UI/Card'
import React, { useState } from 'react';
import './BlockCard.css'
import PriceHeading from '../headingPrice/PriceHeading';

const BlockCard = (props) => {
    const [price, setPrice] = useState([])

    function fetchPriceHandler(event) {
        event.preventDefault()
        fetch('https://apigw.mweb.co.za/prod/baas/proxy/marketing/products/promos/FTTH-LINKAFRICA-SETUP-CLAWBACK-100MBUP,FTTH-WEBCONNECT-M2M,FTTH-FROG-M2M-SETUP-CLAWBACK-100MBUP,FTTH-MFN-SETUP-CLAWBACK-50DEAL,FTTH-LIGHTSTRUCK-SETUP-CLAWBACK-100MBUP,FTTH-OPEN-SETUP-CLAWBACK-100MBUP-NEW,FTTH-EVOTEL-CLAWBACK-100MBUP,FTTH-LINKLAYER-CLAWBACK-100MBUP,FTTH-VODA-CLAWBACK-100MBUP,FTTH-TTCONNECT-CLAWBACK-100MBUP,FTTH-CLEARACCESS-CLAWBACK,FTTH-ZOOM-CLAWBACK,FTTH-OCTOTEL-SETUP-100MBUP,FTTH-CCC-CLARA-CLAWBACK,FTTH-CCC-SETUP-100MBUP,FTTH-CCC-ALT-SETUP-100MBUP,FTTH-VUMA-CLAWBACK-100MBUP?sellable_online=true')
            .then(response => {
                return response.json()
            }).then(data => {
                setPrice(data.products);
                console.log(data);
        })
    }
        
    return (
        <div className="card-grid">
           <div className="container">
                <Card className="menu">
                        <ul>
                            <li>
                                <a href="#">Filter By:</a>
                                <ul>
                                    <li><a href="#" onClick={fetchPriceHandler}>Price</a></li>
                                </ul>
                            </li>
                        </ul>
                    </Card>
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