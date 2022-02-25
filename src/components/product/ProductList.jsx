import React, { useState } from 'react';
import { useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import ProductCard from '../UI-Product/ProductCard';
import './ProductList.css'

const ProductList = () => {
    console.log('Allo product');
    const {data: products, isFetching} =
            useFetch('/prod/baas/proxy/marketing/products/promos/FTTH-LINKAFRICA-SETUP-CLAWBACK-100MBUP,FTTH-WEBCONNECT-M2M,FTTH-FROG-M2M-SETUP-CLAWBACK-100MBUP,FTTH-MFN-SETUP-CLAWBACK-50DEAL,FTTH-LIGHTSTRUCK-SETUP-CLAWBACK-100MBUP,FTTH-OPEN-SETUP-CLAWBACK-100MBUP-NEW,FTTH-EVOTEL-CLAWBACK-100MBUP,FTTH-LINKLAYER-CLAWBACK-100MBUP,FTTH-VODA-CLAWBACK-100MBUP,FTTH-TTCONNECT-CLAWBACK-100MBUP,FTTH-CLEARACCESS-CLAWBACK,FTTH-ZOOM-CLAWBACK,FTTH-OCTOTEL-SETUP-100MBUP,FTTH-CCC-CLARA-CLAWBACK,FTTH-CCC-SETUP-100MBUP,FTTH-CCC-ALT-SETUP-100MBUP,FTTH-VUMA-CLAWBACK-100MBUP?sellable_online=true')
    console.log(products); 
    

   
return (
<div className="container">
    <ProductCard className="prod-card">
        <h2>Fibre Products Providers</h2>
        <div className="container-product">
            <a href="">Show Product</a>
            <p>
                
            </p>
        </div>
    </ProductCard>
</div>
);
};

export default ProductList;