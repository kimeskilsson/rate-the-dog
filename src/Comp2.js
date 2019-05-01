import React, { Component } from 'react';
import './App.css';
import img_elDoggo1 from './images/Comp2_elDoggo1_160955.png';


export default class Comp2 extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_elText = {
        fontSize: 19.4,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const style_elDoggo1 = {
        backgroundImage: 'url('+img_elDoggo1+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    
    return (
      <div className="Comp2" style={baseStyle}>
        <div className="foreground">
          <div className='font-goodDogNew  elText' style={style_elText}>
            <div>{this.props.locStrings.comp2_text_446672}</div>
          </div>
          <div className='elDoggo1' style={style_elDoggo1} />
        </div>
      </div>
    )
  }
  

}
