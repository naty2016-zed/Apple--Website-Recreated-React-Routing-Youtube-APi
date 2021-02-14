import React, {Component } from 'react';
import Structure from "../Containts/Structure"
import './Main2.css';

class Main2 extends Component {
    
    render() { 
        return ( 
            <section className="second-hightlight-wrapper">
				<Structure  alert="New" titleColor="black" title="MacBook Air" priceColor ="grey" price = "From $999."
				colorClass="black" description="Twice the speed. Twice the storage."
				/>
				
	        </section>
         );
    }
}
export default Main2;