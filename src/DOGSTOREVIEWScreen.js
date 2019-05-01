import React, { Component } from 'react';
import './App.css';
import Comp2 from './Comp2';
import img_elImage from './images/ReviewDogsScreen_elImage_210243.jpg';
import img_elImageCopy from './images/ReviewDogsScreen_elImage_210243.jpg';
import img_elImageCopy2 from './images/ReviewDogsScreen_elImage_210243.jpg';
import img_elImageCopy3 from './images/ReviewDogsScreen_elImage_210243.jpg';
import img_elImageCopy4 from './images/ReviewDogsScreen_elImage_210243.jpg';
import img_elImageCopy5 from './images/ReviewDogsScreen_elImage_210243.jpg';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class DOGSTOREVIEWScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo, dogsIMG, dataSheetRow, dogsIMG2, dogsIMG3, dogsIMG4, dogsIMG5, dogsIMG6

  onClick_elButton = (ev) => {
    let newVal = this.props.dataSheetRow.dogsIMG;
    this.props.appActions.updateDataSlot('ds_SelectedDogPicture', newVal);
  
    // Go to screen 'ReviewDogs'
    this.props.appActions.goToScreen('reviewdogs', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elButtonCopy = (ev) => {
    let newVal = this.props.dataSheetRow.dogsIMG2;
    this.props.appActions.updateDataSlot('ds_SelectedDogPicture', newVal);
  
    // Go to screen 'ReviewDogs'
    this.props.appActions.goToScreen('reviewdogs', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elButtonCopy2 = (ev) => {
    let newVal = this.props.dataSheetRow.dogsIMG3;
    this.props.appActions.updateDataSlot('ds_SelectedDogPicture', newVal);
  
    // Go to screen 'ReviewDogs'
    this.props.appActions.goToScreen('reviewdogs', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elButtonCopy3 = (ev) => {
    let newVal = this.props.dataSheetRow.dogsIMG4;
    this.props.appActions.updateDataSlot('ds_SelectedDogPicture', newVal);
  
    // Go to screen 'ReviewDogs'
    this.props.appActions.goToScreen('reviewdogs', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elButtonCopy4 = (ev) => {
    let newVal = this.props.dataSheetRow.dogsIMG5;
    this.props.appActions.updateDataSlot('ds_SelectedDogPicture', newVal);
  
    // Go to screen 'ReviewDogs'
    this.props.appActions.goToScreen('reviewdogs', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elButtonCopy5 = (ev) => {
    let newVal = this.props.dataSheetRow.dogsIMG6;
    this.props.appActions.updateDataSlot('ds_SelectedDogPicture', newVal);
  
    // Go to screen 'ReviewDogs'
    this.props.appActions.goToScreen('reviewdogs', { transitionId: 'fadeIn' });
  
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
    const style_elImage = {
        backgroundImage: 'url('+(this.props.dogsIMG || img_elImage)+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'contain',
     };
    const style_elButton = {
        display: 'block',
        fontSize: 14.2,
        fontFamily: "'GoodDogNew', sans-serif",
        color: 'white',
        textAlign: 'center',
     };
    const style_elButton_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elImageCopy = {
        backgroundImage: 'url('+(this.props.dogsIMG2 || img_elImageCopy)+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'contain',
     };
    const style_elButtonCopy = {
        display: 'block',
        fontSize: 14.2,
        fontFamily: "'GoodDogNew', sans-serif",
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#008cff',
     };
    const style_elButtonCopy_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elImageCopy2 = {
        backgroundImage: 'url('+(this.props.dogsIMG3 || img_elImageCopy2)+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'contain',
     };
    const style_elButtonCopy2 = {
        display: 'block',
        fontSize: 14.2,
        fontFamily: "'GoodDogNew', sans-serif",
        color: 'white',
        textAlign: 'center',
     };
    const style_elButtonCopy2_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elImageCopy3 = {
        backgroundImage: 'url('+(this.props.dogsIMG4 || img_elImageCopy3)+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'contain',
     };
    const style_elButtonCopy3 = {
        display: 'block',
        fontSize: 14.2,
        fontFamily: "'GoodDogNew', sans-serif",
        color: 'white',
        textAlign: 'center',
     };
    const style_elButtonCopy3_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elImageCopy4 = {
        backgroundImage: 'url('+(this.props.dogsIMG5 || img_elImageCopy4)+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'contain',
     };
    const style_elButtonCopy4 = {
        display: 'block',
        fontSize: 14.2,
        fontFamily: "'GoodDogNew', sans-serif",
        color: 'white',
        textAlign: 'center',
     };
    const style_elButtonCopy4_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elImageCopy5 = {
        backgroundImage: 'url('+(this.props.dogsIMG6 || img_elImageCopy5)+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'contain',
     };
    const style_elButtonCopy5 = {
        display: 'block',
        fontSize: 14.2,
        fontFamily: "'GoodDogNew', sans-serif",
        color: 'white',
        textAlign: 'center',
     };
    const style_elButtonCopy5_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen DOGSTOREVIEWScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='hasNestedComps elComp2'>
            <div>
              <Comp2 ref={(el)=> this._elComp2 = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
          <div className='elImage'>
            <div style={style_elImage} />
          
          </div>
          
          <div className='elButton' style={style_elButton_outer}>
            <Button style={style_elButton}  color="accent" onClick={this.onClick_elButton} >
              {this.props.locStrings.dogstoreview_button_977173}
            </Button>
          
          </div>
          
          <div className='elImageCopy'>
            <div style={style_elImageCopy} />
          
          </div>
          
          <div className='elButtonCopy' style={style_elButtonCopy_outer}>
            <Button style={style_elButtonCopy}  onClick={this.onClick_elButtonCopy} >
              {this.props.locStrings.dogstoreview_button_162406}
            </Button>
          
          </div>
          
          <div className='elImageCopy2'>
            <div style={style_elImageCopy2} />
          
          </div>
          
          <div className='elButtonCopy2' style={style_elButtonCopy2_outer}>
            <Button style={style_elButtonCopy2}  color="accent" onClick={this.onClick_elButtonCopy2} >
              {this.props.locStrings.dogstoreview_buttoncopy_187373}
            </Button>
          
          </div>
          
          <div className='elImageCopy3'>
            <div style={style_elImageCopy3} />
          
          </div>
          
          <div className='elButtonCopy3' style={style_elButtonCopy3_outer}>
            <Button style={style_elButtonCopy3}  color="accent" onClick={this.onClick_elButtonCopy3} >
              {this.props.locStrings.dogstoreview_buttoncopy2_928495}
            </Button>
          
          </div>
          
          <div className='elImageCopy4'>
            <div style={style_elImageCopy4} />
          
          </div>
          
          <div className='elButtonCopy4' style={style_elButtonCopy4_outer}>
            <Button style={style_elButtonCopy4}  color="accent" onClick={this.onClick_elButtonCopy4} >
              {this.props.locStrings.dogstoreview_buttoncopy3_865674}
            </Button>
          
          </div>
          
          <div className='elImageCopy5'>
            <div style={style_elImageCopy5} />
          
          </div>
          
          <div className='elButtonCopy5' style={style_elButtonCopy5_outer}>
            <Button style={style_elButtonCopy5}  color="accent" onClick={this.onClick_elButtonCopy5} >
              {this.props.locStrings.dogstoreview_buttoncopy4_1008560}
            </Button>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
