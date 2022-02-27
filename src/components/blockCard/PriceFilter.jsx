import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Block from '../UI-Cards/Block';



export default function PriceFilter(props) {
const {
price
} = props;



return (
		<Block  className="container container-content__card">
			<div className="card-two__one">
				<div className="cards-itemss">
					<h4>Title</h4>
					<p>Unthrottled</p>

					<div className="itemss">
						<p>R2030</p>
					</div>

					<div className="itemss">
						<img src="" alt="icon" />
					</div>
				</div>

				<div className="cards-itemss">
					<div className="card-icons">
					     <div className="icons-download">
							 <span><FontAwesomeIcon icon={faArrowDown} /></span>
						    <p>Download</p>
						 </div>
						 <div className="icons-download">
							 <span><FontAwesomeIcon icon={faArrowUp} /></span>
						    <p>Upload</p>
						 </div>
					</div>
					<div className="card-icons">
					     <a href="#">Check coverage</a>
					</div>
				</div>
			</div>

			<div className="card-two__one">
				<div className="cards-itemss">
					<h4>Title</h4>
					<p>Unthrottled</p>

					<div className="itemss">
						<p>R2030</p>
					</div>

					<div className="itemss">
						<img src="" alt="icon" />
					</div>
				</div>

				<div className="cards-itemss">
					<div className="card-icons">
					     <div className="icons-download">
							 <span><FontAwesomeIcon icon={faArrowDown} /></span>
						    <p>Download</p>
						 </div>
						 <div className="icons-download">
							 <span><FontAwesomeIcon icon={faArrowUp} /></span>
						    <p>Upload</p>
						 </div>
					</div>
					<div className="card-icons">
					     <a href="#">Check coverage</a>
					</div>
				</div>
			</div>
		</Block>
);
}