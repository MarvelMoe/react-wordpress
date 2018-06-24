import React, { Component } from 'react';
import focus from '../images/hotelfocus.jpg';
import blk from '../images/black-panther.jpg';


 class Body extends Component {


render() {
	return (
		<div className="mybody-wrapper">
		<h2>My Works</h2>
		<section className="mybody">
		 
			 <img src={focus}  className="body-img" /> 
			<img src={blk}  className="body-img" /> 

 		</section>
		</div>
		)
	}
}


export default Body;