import React from 'react';
import Banner from '../components/banner/Banner';
import BlockCard from '../components/blockCard/BlockCard';
import Footer from '../components/footer/Footer';
import Heading from '../components/heading/Heading';
import Navbar from '../components/navbar/Navbar';
import ProductList from '../components/product/ProductList';
import Table from '../components/table/Table';


const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Heading />
            <ProductList />
            <BlockCard />
            <Table />
            <Footer />
        </div>
    );
};

export default Home;