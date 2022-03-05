import React from 'react';
import Banner from '../components/banner/Banner';
import BlockCard from '../components/blockCard/BlockCard';
import Footer from '../components/footer/Footer';
import Heading from '../components/heading/Heading';
import PriceHeading from '../components/headingPrice/PriceHeading';
import Navbar from '../components/navbar/Navbar';
import ProductList from '../components/product/ProductList';
import Table from '../components/table/Table';




const Home = (props) => {
    return (
        <React.Fragment>
           <section>
              <Navbar />
           </section>
            <section>
               <Banner />
            </section>
            <section>
               <Heading />
            </section>
            <section>
               <ProductList />
            </section>
            <section>
               <BlockCard />
            </section>
            <section>
            <PriceHeading />
            </section>
            <section>
               <Table />
            </section>
            <section>
             <Footer />
            </section>
        </React.Fragment>
    );
};

export default Home;