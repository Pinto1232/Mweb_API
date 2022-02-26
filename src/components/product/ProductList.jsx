import React, {
    useState } from 'react';
import ProductCard from '../UI-Product/ProductCard';
import './ProductList.css'

 
const ProductList = () => {
    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(false)

     const fetchProductHandler = async(event) => {
        setIsLoading(true)
        event.preventDefault()

        const response = await fetch('https://apigw.mweb.co.za/prod/baas/proxy/marketing/products/promos/FTTH-LINKAFRICA-SETUP-CLAWBACK-100MBUP,FTTH-WEBCONNECT-M2M,FTTH-FROG-M2M-SETUP-CLAWBACK-100MBUP,FTTH-MFN-SETUP-CLAWBACK-50DEAL,FTTH-LIGHTSTRUCK-SETUP-CLAWBACK-100MBUP,FTTH-OPEN-SETUP-CLAWBACK-100MBUP-NEW,FTTH-EVOTEL-CLAWBACK-100MBUP,FTTH-LINKLAYER-CLAWBACK-100MBUP,FTTH-VODA-CLAWBACK-100MBUP,FTTH-TTCONNECT-CLAWBACK-100MBUP,FTTH-CLEARACCESS-CLAWBACK,FTTH-ZOOM-CLAWBACK,FTTH-OCTOTEL-SETUP-100MBUP,FTTH-CCC-CLARA-CLAWBACK,FTTH-CCC-SETUP-100MBUP,FTTH-CCC-ALT-SETUP-100MBUP,FTTH-VUMA-CLAWBACK-100MBUP?sellable_online=true')
            const data = await response.json()
                const transformProducts = data.map((productData) => {
                    return {
                        id: productData.promoCode,
                        description: productData.promoCodeDescription,
                    }
                })
               setProduct(transformProducts)
               setIsLoading(false)
               console.log(transformProducts);
}

    return (
        <div className="container">
            <ProductCard className="prod-card">
                <h2>Fibre Products Providers</h2>
                <div className="container-product">
                    <a href="#" onClick={fetchProductHandler}>Show Product</a>
                </div>
            </ProductCard>
            <br />
            <ProductCard className="prod-card">
                <div className="container-product">
                   <ul>
                        {product.map((prod) => {
                            return (
                                <li key={prod.id}>
                                        {isLoading && <p>Loading...</p>}
                                        <p><strong>Products</strong>: {prod.description}</p>
                                        {!isLoading && product.length === 0 && <p>Found no product</p>}
                                </li>
                                ) 
                            })} 
                    </ul>
                </div>
            </ProductCard>
        </div>
        );
    };

export default ProductList;