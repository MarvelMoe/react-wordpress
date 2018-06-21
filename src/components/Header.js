import React, { Component } from 'react';
import moe from '../moe.png';
import { StyleSheet, Text, View, Image} from 'react';



class Header extends Component {
	render(){
		return (
			<div className="grid-container">
			<header>
			  <img src={moe} className="header-img" alt="logo" />
			</header>

			<div className="title grid-half">
			   <div className="my-name">
			    <svg width="265" height="365" viewBox="-70 0 365 365">
			     <path d="M152.27,99.68H136.13V55.35l-9.42,44.33H114.24l-10.8-44.33V99.68H89.31v-79h23.26l8.27,41,7.18-41h24.24Z" transform="translate(-60 -20)" className="moe"/>

			     <path d="M156.12,86.19V35.36Q156.12,20,176.88,20q20.48,0,20.48,15.25V86.08a11.92,11.92,0,0,1-5.71,10.6q-5.71,3.72-14.89,3.72Q156.12,100.39,156.12,86.19Zm23.61.83V33.22q0-2.37-2.93-2.37t-3,2.37V87q0,2.37,3,2.37T179.73,87Z" transform="translate(-60-19)" className="moe"/>

			     <path d="M236.6,99.68H201.21v-79h35.16V30.85H219.31V52.21H234.7v9.58H219.31V89.54H236.6Z" transform="translate(-60 -20)" className="moe"/>

			     <path d="M109.24,235H91.15V197.12H86.09V235H68V156H86.09v31.5h5.06V156h18.09Z" transform="translate(-68 -60)"  className="himed" />
			     <path d="M130.79,235H112.69V156h18.09Z" transform="translate(-68 -60)" className="himed" />

			     <path d="M197.42,235H181.28V190.67L171.86,235H159.39l-10.8-44.33V235H134.46V156h23.26L166,197l7.18-41h24.24Z" transform="translate(-68 -60)"  className="himed"  />

			     <path d="M236.83,235H201.44V156H236.6v10.13H219.54v21.36h15.39v9.58H219.54v27.75h17.29Z" transform="translate(-68 -60)"  className="himed" />

			     <path d="M239.53,235V156h22.58a23.19,23.19,0,0,1,13.13,3.83q5.76,3.83,5.76,11.76v47.79q0,7.38-5.39,11.48a21.46,21.46,0,0,1-13.39,4.1Zm23.26-14.32V170.31q0-4.13-5.17-4.13v58.7Q262.79,224.87,262.79,220.68Z" transform="translate(-68 -60)"  className="himed" />
			    </svg>
			   </div>

			</div>

			</div>



			)
	}
}
export default Header;
 