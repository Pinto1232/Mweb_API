import React from 'react'
import Block from '../UI-Cards/Block';
import './BlockCard.css'


export default function PriceFilter(props) {
const {
price
} = props;



return (
<div className='card-holder'>
	<div className="containers">
		<Block className="container">
			<div className="card-two">
				<div className="cards-items">
					<h4>Title</h4>
					<p>Unthrottled</p>

					<div className="items">
						<p>R2030</p>
					</div>

					<div className="items">
						<img src="" alt="icon" />
					</div>
				</div>

				<div className="cards-items">
					<div className="card-icons">
					     <div className="icons-download">
							 <img src="#" alt="icon" />
						    <p>Download</p>
						 </div>
						 <div className="icons-download">
							 <img src="#" alt="icon" />
						    <p>Upload</p>
						 </div>
					</div>
					<div className="card-icons">
					     <a href="#">Check coverage</a>
					</div>
				</div>
			</div>

			<div className="card-two">
				<div className="cards-items">
					<h4>Title</h4>
					<p>Unthrottled</p>

					<div className="items">
						<p>R2030</p>
					</div>

					<div className="items">
						<img src="" alt="icon" />
					</div>
				</div>

				<div className="cards-items">
					<div className="card-icons">
					     <div className="icons-download">
							 <img src="#" alt="icon" />
						    <p>Download</p>
						 </div>
						 <div className="icons-download">
							 <img src="#" alt="icon" />
						    <p>Upload</p>
						 </div>
					</div>
					<div className="card-icons">
					     <a href="#">Check coverage</a>
					</div>
				</div>
			</div>

			<div className="card-two">
				<div className="cards-items">
					<h4>Title</h4>
					<p>Unthrottled</p>

					<div className="items">
						<p>R2030</p>
					</div>

					<div className="items">
						<img src="" alt="icon" />
					</div>
				</div>

				<div className="cards-items">
					<div className="card-icons">
					     <div className="icons-download">
							 <img src="#" alt="icon" />
						    <p>Download</p>
						 </div>
						 <div className="icons-download">
							 <img src="#" alt="icon" />
						    <p>Upload</p>
						 </div>
					</div>
					<div className="card-icons">
					     <a href="#">Check coverage</a>
					</div>
				</div>
			</div>
		</Block>
	</div>
</div>
);
}