import React, {Component } from 'react';
import Structure from "../Containts/Structure";
import './Main3.css'

class Main3 extends Component {
   
    render() { 
        return ( 
            <section className="third-hightlight-wrapper">
               <Structure titleColor= "white" title="iPhone 11 Pro" priceColor ="grey" 
               price = "From $24.95/mo. or $599 with trade‑in."
			    colorClass="white" description="Pro cameras. Pro display. Pro performance."
				/>
	        </section>
         );
    }
}
 
export default Main3;

