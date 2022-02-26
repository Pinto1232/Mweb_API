        import React, {useState, useEffect} from 'react';
        import { useFetch } from '../hooks/useFetch';
        import './Heading.css';
        import { useQuery } from 'react-query';
        import axios from 'axios';


        const Heading = () => {
            

        return (
        <div className="heading">
            {/* {isFetching && <p className='load'>Loading data...</p>} */}
            <h2>Fibre products</h2>
            <p>
                Select a Fribre infrastructure provider below, browse the products available
                and complete coverage search
            </p>



            <div className="logo-display">
                <div className="container">
                    <div className="logo-boxes__items">
                        <img src="https://www.mweb.co.za/media/images/providers/provider-century.png"
                            alt="" />
                    </div>

                    <div className="logo-boxes__items">
                        <img src="https://www.mweb.co.za/media/images/providers/provider-evotel.png"
                            alt="" />
                    </div>

                    <div className="logo-boxes__items">
                        <img src="https://www.mweb.co.za/media/images/providers/provider-octotel.png"
                            alt="" />
                    </div>

                    <div className="logo-boxes__items">
                        <img src="https://www.mweb.co.za/media/images/providers/provider-vuma.png"
                            alt="" />
                    </div>

                    <div className="logo-boxes__items">
                        <img src="https://www.mweb.co.za/media/images/providers/provider-openserve.png"
                            alt="" />
                    </div>

                    <div className="logo-boxes__items">
                        <img src="https://www.mweb.co.za/media/images/providers/provider-frogfoot.png"
                            alt="" />
                    </div>

                    <div className="logo-boxes__items">
                        <img src="https://www.mweb.co.za/media/images/providers/provider-metrofibre.png"
                            alt="" />
                    </div>

                    <div className="logo-boxes__items">
                        <img src="https://www.mweb.co.za/media/images/providers/provider-vodacom.png"
                            alt="" />
                    </div>



                    <div className="logo-boxes__items">
                        <img src="https://www.mweb.co.za/media/images/providers/provider-linkafrica.png"
                            alt="" />
                    </div>

                    <div className="logo-boxes__items">
                        <img src="https://www.mweb.co.za/media/images/providers/provider-link-layer.png"
                            alt="" />
                    </div>

                    <div className="logo-boxes__items">
                        <img src="https://www.mweb.co.za/media/images/providers/provider-lightstruck.png"
                            alt="" />
                    </div>

                    <div className="logo-boxes__items">
                        <img src="https://www.mweb.co.za/media/images/providers/provider-mitchells.png"
                            alt="" />
                    </div>

                    <div className="logo-boxes__items">
                        <img src="https://www.mweb.co.za/media/images/providers/provider-vuma.png"
                            alt="" />
                    </div>
                </div>
            </div>
        </div>
        );
        };

        export default Heading;