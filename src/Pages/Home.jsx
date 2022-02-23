import React from 'react';
import Banner from '../components/banner/Banner';
import BlockCard from '../components/blockCard/BlockCard';
import Heading from '../components/heading/Heading';
import Navbar from '../components/navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Heading />
            <BlockCard />
        </div>
    );
};

export default Home;