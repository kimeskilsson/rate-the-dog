import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/ReviewDogsScreen_elImage_210243.jpg';
import Rating from 'react-rating';
import StarOn from './StarOn';
import StarOff from './StarOff';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class ReviewDogsScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  valueChanged_rating = (rating) => {
    this.setState({rating: rating});
    this.props.appActions.updateDataSlot("ds_SlotUserReviewRating", rating);
  }
  
  onClick_elButton = (ev) => {
    this.sendData_button_to_reviews();
  
    // Go to screen 'DOGS TO REVIEW'
    this.props.appActions.goToScreen('dogstoreview', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elButton2 = (ev) => {
    // Go to screen 'DOGS TO REVIEW'
    this.props.appActions.goToScreen('dogstoreview', { transitionId: 'fadeIn' });
  
  }
  
  
  sendData_button_to_reviews = () => {
    const dataSheet = this.props.appActions.getDataSheet('reviews');
  
    let row = this.props.dataSheetRow || {
    };
    row = { ...row, 
      dogsID: (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_SelectedDogPicture'] : ''),
      reviewRating: (this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_SlotUserReviewRating'] : ''),
    };
    if (this.props.dataSheetId === dataSheet.id) {
      this.props.appActions.updateInDataSheet('reviews', row);
    } else {
      this.props.appActions.addToDataSheet('reviews', row);
    }
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
        backgroundImage: 'url('+((this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_SelectedDogPicture'] : '') || img_elImage)+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'contain',
     };
    const style_elRating_outer = {
        pointerEvents: 'auto',
     };
    const style_elButton = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
     };
    const style_elButton_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elButton2 = {
        display: 'block',
        fontSize: 14.2,
        fontFamily: "'GoodDogNew', sans-serif",
        color: '#0093d5',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen ReviewDogsScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elImage'>
            <div style={style_elImage} />
          
          </div>
          
          <div className='elRating' style={style_elRating_outer}>
            <div>
              <Rating readonly={false} start={0} stop={5} initialRating={parseInt((this.props.appActions.dataSlots ? this.props.appActions.dataSlots['ds_SlotUserReviewRating'] : ''))} onChange={this.valueChanged_rating} fullSymbol={<StarOn locStrings={this.props.locStrings} />} emptySymbol={<StarOff locStrings={this.props.locStrings} />} />
            </div>
          
          </div>
          
          <div className='actionFont elButton' style={style_elButton_outer}>
            <Button style={style_elButton}  color="accent" onClick={this.onClick_elButton} >
              {this.props.locStrings.reviewdogs_button_88465}
            </Button>
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <button className='elButton2' style={style_elButton2}  onClick={this.onClick_elButton2} >
              {this.props.locStrings.reviewdogs_button2_193077}
            </button>
          </div>
        </div>
      </div>
    )
  }
  

}
