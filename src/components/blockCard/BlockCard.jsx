import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome';
import Block from '../UI-Cards/Block'
import Card from '../UI/Card'
import React, {
    useEffect,
    useState
} from 'react';
import PriceHeading from '../headingPrice/PriceHeading';
import axios from 'axios';
import PriceFilter from './PriceFilter';

const BlockCard = (props) => {
    const [data, setData] = useState([])
    const [limit, setLimit] = useState(1)

    const fetchData = () => {

        axios
            .get(
                "https://apigw.mweb.co.za/prod/baas/proxy/marketing/products/promos/FTTH-LINKAFRICA-SETUP-CLAWBACK-100MBUP,FTTH-WEBCONNECT-M2M,FTTH-FROG-M2M-SETUP-CLAWBACK-100MBUP,FTTH-MFN-SETUP-CLAWBACK-50DEAL,FTTH-LIGHTSTRUCK-SETUP-CLAWBACK-100MBUP,FTTH-OPEN-SETUP-CLAWBACK-100MBUP-NEW,FTTH-EVOTEL-CLAWBACK-100MBUP,FTTH-LINKLAYER-CLAWBACK-100MBUP,FTTH-VODA-CLAWBACK-100MBUP,FTTH-TTCONNECT-CLAWBACK-100MBUP,FTTH-CLEARACCESS-CLAWBACK,FTTH-ZOOM-CLAWBACK,FTTH-OCTOTEL-SETUP-100MBUP,FTTH-CCC-CLARA-CLAWBACK,FTTH-CCC-SETU"
            )
            .then((response) => {
                /* console.log(response); */
                const getData = response.data;
                setData(getData);
            });
    };
    useEffect(() => fetchData(), []);
    console.log('Price data', data);


 

    return (
        <div className="card-grid">
        <div className="container">
            <Card className="menu">
                <ul>
                    <li>
                        <a className='main-mentioned' href="#">Filter By Price:</a>
                        <ul>
                            <li><a className='mentioned' href="#">R0 - R699</a></li>
                            <li><a className='mentioned' href="#">R700 - R999</a></li>
                            <li><a className='mentioned' href="#">1000+</a></li>
                        </ul>
                    </li>
                </ul>
            </Card>
        </div>
        <div className='containeir-price'>
           {/*  {data.slice(0, limit).map((item, index) =>(
            <div key={index}>
                {item.products.map((itemprice, index2) => (
                <div key={index2}>
                    <PriceFilter price={itemprice} />
                </div>
                ))}
            </div>
            ))} */}

            <PriceFilter />
        </div>
     </div>
    );
};

export default BlockCard;