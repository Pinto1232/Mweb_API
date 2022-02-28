import Card from '../UI/Card'
import React, {
    useEffect,
    useState
} from 'react';
import axios from 'axios';
import PriceFilter from './PriceFilter';
import './BlockCard.css'
import ReactPaginate from 'react-paginate';


const BlockCard = (props) => {
    const [data, setData] = useState([])
    const [limit, setLimit] = useState(1)

    const fetchData = async (currentPage) => {
        axios
            .get(
                "https://apigw.mweb.co.za/prod/baas/proxy/marketing/products/promos/FTTH-LINKAFRICA-SETUP-CLAWBACK-100MBUP,FTTH-WEBCONNECT-M2M,FTTH-FROG-M2M-SETUP-CLAWBACK-100MBUP,FTTH-MFN-SETUP-CLAWBACK-50DEAL,FTTH-LIGHTSTRUCK-SETUP-CLAWBACK-100MBUP,FTTH-OPEN-SETUP-CLAWBACK-100MBUP-NEW,FTTH-EVOTEL-CLAWBACK-100MBUP,FTTH-LINKLAYER-CLAWBACK-100MBUP,FTTH-VODA-CLAWBACK-100MBUP,FTTH-TTCONNECT-CLAWBACK-100MBUP,FTTH-CLEARACCESS-CLAWBACK,FTTH-ZOOM-CLAWBACK,FTTH-OCTOTEL-SETUP-100MBUP,FTTH-CCC-CLARA-CLAWBACK,FTTH-CCC-SETU?_page=1&_limit=3"
            )
            .then((response) => {
                /* console.log(response); */
                const getData = response.data;
                const total = response.headers['set-cookie']
                console.log(total);
                
                setData(getData);
            });
    };
    useEffect(() => fetchData(), []);
    console.log('Price data', data);




    /* Pagination method */

    const handlePageClick = async (data) =>
    {
        console.log('Clicked', data.selected);
        let currentPage = data.selected +  1 

        const commentsFormServe = await fetchData(currentPage)

        /*  setData([commentsFormServe])  */
    
    }

    

    return (
        <div className="card-grid">
        <div className="container">
            <Card style={{marginBottom: '12em'}} className="menu">
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
            {data.slice(0, limit).map((item, index) =>(
            <div key={index}>
                {item.products.map((itemprice, index2) => (
                <div key={index2}>
                    <PriceFilter price={itemprice} />
                </div>
                ))}
            </div>
            ))}  
            </div>
            
            <Card className="container card-helper__pagination">
            <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                pageCount={25}
                marginPagesDisplayed={7}
                pageRangeDisplayed={4}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item items-one'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}
                    activeClassName={'active'}
            />
            </Card>
     </div>
    );
};

export default BlockCard;