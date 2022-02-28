	import React, {
	useEffect,
	useState
	} from 'react';
	import ProductCard from '../UI-Product/ProductCard';
	import './ProductList.css'
	import axios from 'axios'
	import Product from './Product';


	const ProductList = () => {
	const [data, setData] = useState([]);
	const [limit, setLimit] = useState(3)
	const [isLoading, setIsLoading] = useState(true) 



	const fetchData = () => {

	axios
	.get(
	"https://apigw.mweb.co.za/prod/baas/proxy/marketing/products/promos/FTTH-LINKAFRICA-SETUP-CLAWBACK-100MBUP,FTTH-WEBCONNECT-M2M,FTTH-FROG-M2M-SETUP-CLAWBACK-100MBUP,FTTH-MFN-SETUP-CLAWBACK-50DEAL,FTTH-LIGHTSTRUCK-SETUP-CLAWBACK-100MBUP,FTTH-OPEN-SETUP-CLAWBACK-100MBUP-NEW,FTTH-EVOTEL-CLAWBACK-100MBUP,FTTH-LINKLAYER-CLAWBACK-100MBUP,FTTH-VODA-CLAWBACK-100MBUP,FTTH-TTCONNECT-CLAWBACK-100MBUP,FTTH-CLEARACCESS-CLAWBACK,FTTH-ZOOM-CLAWBACK,FTTH-OCTOTEL-SETUP-100MBUP,FTTH-CCC-CLARA-CLAWBACK,FTTH-CCC-SETU"
	)
	.then((response) => {
	/* console.log(response); */
	const getData = response.data;
	setIsLoading(false)
	setData(getData);
	});
	};


	useEffect(() => fetchData(), []);
	console.log("On Click", data);


	const loadMoreHandler = (event) => {
	event.preventDefault()
	setLimit(prevValue => prevValue + 3)
	}


	if(isLoading) {
		return <h2 style={{textAlign: 'center', marginTop: '40px'}}>Loading...</h2>
	}


return (
<div className="container">
    <ProductCard className="prod-card">
        <h2>Fibre Products Providers</h2>
        <div className="container-product">
            <a href="#" onClick={fetchData}>Fetch Product</a>
        </div>
    </ProductCard>
    <br />
    <ProductCard className="prod-card">
        <div className="container-product">
            {data.slice(0, limit).map((item, index) => (
            <div key={index}>
               
                {item.products.map((item2, index2) => (
                <div key={index2}>
                    <Product product={item2} />
                </div>
                ))}
            </div>
            ))}
        </div>
        <div className="container more-to">
            <a href="#" className='load-more__btn' onClick={loadMoreHandler}>Load more</a>
        </div>
    </ProductCard>

</div>
);
};

export default ProductList;