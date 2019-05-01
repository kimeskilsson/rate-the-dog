import React, { Component } from 'react';
import './App.css';
import Comp2 from './Comp2';
import img_elImage2 from './images/StartPageScreen_elImage2_205869.jpg';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class StartPageScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo, message

  onClick_elButton = (ev) => {
    // Go to screen 'login'
    this.props.appActions.goToScreen('login', { transitionId: 'fadeIn' });
  
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_outer = {
        backgroundColor: '#f6f6f6',
     };
    const style_elImage2 = {
        backgroundImage: 'url('+(this.props.message || img_elImage2)+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'contain',
     };
    const style_elButton = {
        display: 'block',
        fontSize: 14.2,
        fontFamily: "'GoodDogNew', sans-serif",
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#008cff',
     };
    const style_elButton_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen StartPageScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='hasNestedComps elComp'>
            <div>
              <Comp2 ref={(el)=> this._elComp = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
          <div className='elDoggo'>
            <div />
          
          </div>
          
          <div className='elImage2'>
            <div style={style_elImage2} />
          
          </div>
          
          <div className='elButton' style={style_elButton_outer}>
            <Button style={style_elButton}  onClick={this.onClick_elButton} >
              {this.props.locStrings.start_button_522956}
            </Button>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
