import React, { Component } from 'react';



import Main1 from "./Main1/Main1";
import Main2 from "./Main2/Main2";
import Main3 from "./Main3/Main3";
import Main4 from "./Main4/Main4";
import Main5 from "./Main5/Main5";
import Main6 from "./Main6/Main6";
import Youtube from '../Youtube/Youtube';


class main extends Component {
  render(){
    return (
      <div>

        <Main1 />
        <Main2 />
        <Main3 />
        <Main4 />
        <Main5 />
        <Main6 />
        {/* <Youtube /> */}
                     
      </div>
      
    );
  }
  
}

export default main;