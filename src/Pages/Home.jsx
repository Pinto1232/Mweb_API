import React from 'react';
import Banner from '../components/banner/Banner';
import BlockCard from '../components/blockCard/BlockCard';
import Footer from '../components/footer/Footer';
import Heading from '../components/heading/Heading';
import Navbar from '../components/navbar/Navbar';
import Table from '../components/table/Table';


const Home = () => {
     fetch('https://apigw.mweb.co.za/prod/baas/proxy/marketing/products/promos/FTTH-VODA-CLAWBACK-100MBUP,FTTH-TTCONNECT-CLAWBACK-100MBUP,FTTH-CLEARACCESS-CLAWBACK,FTTH-ZOOM-CLAWBACK,FTTH-CCC-CLARA-CLAWBACK,FTTH-OCTOTEL-SETUP-100MBUP,FTTH-CCC-ALT-SETUP-100MBUP,FTTH-CCC-SETUP-100MBUP,FTTH-VUMA-CLAWBACK-100MBUP,FTTH-WEBCONNECT-M2M,FTTH-LINKAFRICA-SETUP-CLAWBACK-100MBUP,FTTH-MFN-SETUP-CLAWBACK-50DEAL,FTTH-FROG-M2M-SETUP-CLAWBACK-100MBUP,FTTH-LIGHTSTRUCK-SETUP-CLAWBACK-100MBUP,FTTH-OPEN-SETUP-CLAWBACK-100MBUP-NEW,FTTH-EVOTEL-CLAWBACK-100MBUP,FTTH-LINKLAYER-CLAWBACK-100MBUP?sellable_online=true')
    .then((res) => res.json())
    .then(console.log);
     
    return (
        <div>
            <Navbar />
            <Banner />
            <Heading />
            <BlockCard />
            <Table />
            <Footer />
        </div>
    );
};

export default Home;