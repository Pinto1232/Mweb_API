import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from '@mui/material';
import React from 'react'




export default function PriceFilter(props) {
const {
price
} = props;



return (
		<Card className="container container-content__card">
			<div className="card-two__one">
				<div className="cards-itemss">
					<h4>{price.friendlyName}</h4>
					<p>{price.chargePeriod}</p>
					<p>{price.productDescription}</p>

					<div className="itemss">
						<p>R{price.productRate}</p>
					</div>

					<div className="itemss">
						<img className='company-logo' src="https://www.mweb.co.za/media/images/providers/provider-lightstruck.png" alt="icon" />
					</div>
				</div>

				<div className="cards-itemss">
					<div className="card-icons">
					     <div className="icons-download">
							 <span><FontAwesomeIcon style={{color: 'red'}} icon={faArrowDown} /></span>
						    <p className='btn-download'>Download</p>
						 </div>
						 <div className="icons-download">
							 <span><FontAwesomeIcon style={{color: 'greenyellow'}} icon={faArrowUp} /></span>
						    <p className='btn-download'>Upload</p>
						 </div>
					</div>
					<div className="card-icons">
					     <a href="#">Check coverage</a>
					</div>
				</div>
			</div>
		</Card>
);
}