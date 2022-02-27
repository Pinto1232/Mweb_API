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
                setPrice(data);
                console.log(data);
        })
    }


    
    return (
        <div className="card-grid">
           <div className="container">
                <Card className="menu">
                        <ul>
                            <li>
                                <a className='main-mentioned' href="#">Filter By Price:</a>
                                <ul>
                                    <li><a className='mentioned' href="#" onClick={fetchPriceHandler}>R0 - R699</a></li>
                                    <li><a className='mentioned' href="#" onClick={fetchPriceHandler}>R700 - R999</a></li>
                                    <li><a className='mentioned' href="#" onClick={fetchPriceHandler}>1000+</a></li>
                                </ul>
                            </li>
                        </ul>
                   </Card>
                </div>
            <div className="container">
                <Block className="block-card__info">
                    <h2>Fibre title</h2>
                    <p>Unthrottled</p>
                    <p>Package</p>
                    <p>
                        Description of the package
                    </p>
                    <h3>Price</h3>
                    <img src="#" alt="logo" />
                    <a href="#">Check coverage</a>
                </Block>

                <Block className="block-card__info">
                    <h2><img src="" alt="" />Fibre title</h2>
                    <p>Unthrottled</p>
                    <p>Package</p>
                    <p>
                       Description of the package
                    </p>
                    <h3>Price</h3>
                    <img src="#" alt="logo" />
                    <a href="#">Check coverage</a>
                </Block>

                <Block className="block-card__info">
                    <h2><img src="" alt="" />Fibre title</h2>
                    <p>Unthrottled</p>
                    <p>Package</p>
                    <p>
                         Description of the package
                    </p>
                    <h3>Price</h3>
                    <img src="#" alt="logo" />
                    <a href="#">Check coverage</a>
                </Block>
                </div>
                <PriceHeading />
        </div>
    );
};

export default BlockCard;