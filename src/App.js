import React, { Component } from 'react';
import LocalizedStrings from 'react-localization';
import './App.css';
import ReviewDogsScreen from './ReviewDogsScreen.js';
import DOGSTOREVIEWScreen from './DOGSTOREVIEWScreen.js';
import LoginScreen from './LoginScreen.js';
import StartPageScreen from './StartPageScreen.js';
import DataSheet_localizationSheet from './DataSheet_localizationSheet.js';
import DataSheet_dogPic from './DataSheet_dogPic.js';
import DataSheet_DOGSCollection from './DataSheet_DOGSCollection.js';
import DataSheet_reviews from './DataSheet_reviews.js';
import firebase from 'firebase';
import firestore from 'firebase/firestore';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.dataSheets = {};
    this.dataSheets['localizationSheet'] = new DataSheet_localizationSheet('localizationSheet', this.dataSheetDidUpdate);
    this.dataSheets['dogPic'] = new DataSheet_dogPic('dogPic', this.dataSheetDidUpdate);
    this.dataSheets['DOGSCollection'] = new DataSheet_DOGSCollection('DOGSCollection', this.dataSheetDidUpdate);
    this.dataSheets['reviews'] = new DataSheet_reviews('reviews', this.dataSheetDidUpdate);

    this.dataSlots = {};
    this.dataSlots['ds_activeLang'] = "en";
    this.dataSlots['ds_SlotUserID'] = "";
    this.dataSlots['ds_SlotUserName'] = "";
    this.dataSlots['ds_SlotUserEmail'] = "";
    this.dataSlots['ds_SlotUserPhoto'] = "";
    this.dataSlots['ds_SlotUserReviewRating'] = "";
    this.dataSlots['ds_SelectedDogID'] = "";
    this.dataSlots['ds_SelectedDogPicture'] = "";
    this.dataSlots['ds_Slot 9'] = "";

    this.updateLocalizationFromDataSheet(this.dataSheets['localizationSheet']);


    // Initialize web service plugin 'dog database'
    firebase.initializeApp({
    apiKey: "AIzaSyDitXz826GYoao2_0-ncasJra9qyeO5IHY",
        authDomain: "ratethedog-d2c23.firebaseapp.com",
        databaseURL: "https://ratethedog-d2c23.firebaseio.com",
        projectId: "ratethedog-d2c23",
        storageBucket: "ratethedog-d2c23.appspot.com",
        messagingSenderId: "171390866095"
      
    });
    firebase.firestore().settings({});
    
    this.serviceOptions_dogPic = {
      dataSlots: this.dataSlots,
      servicePath: "",
      query: "",
    };
    setInterval(() => {  // Reload data regularly
      this.serviceOptions_dogPic.servicePath = this.dataSheets['dogPic'].expandSlotTemplateString("", this.dataSlots);
      this.loadData_jsonsrc1(this.dataSheets['dogPic'], this.serviceOptions_dogPic, false);
    }, 10000);
    
    this.serviceOptions_DOGSCollection = {
      dataSlots: this.dataSlots,
      servicePath: "dogs",
      query: "",
    };
    this.dataSheets['DOGSCollection'].firebase = firebase;
    
    this.serviceOptions_reviews = {
      dataSlots: this.dataSlots,
      servicePath: "review",
      query: "where(\"dogsID\", \"==\", \"$slot('ds_SelectedDogID')\")",
    };
    this.dataSheets['reviews'].firebase = firebase;
    

    this.state = {
      currentScreen: 'startpage',
      currentScreenProps: {},
      screenTransitionForward: true,
    }
    this.screenHistory = [ {...this.state} ];

  }

  windowDidResize = () => {
    let w = window.innerWidth;
    let formatId;
    if (w < 576) formatId = 'narrow-phone';
    else if (w < 768) formatId = 'wide-phone';
    else if (w < 1024) formatId = 'narrow-tablet';
    else formatId = 'wide-tablet';
    if (formatId !== this.state.screenFormatId) {
      this.setState({screenFormatId: formatId});
    }
  }

  componentDidMount() {
    this.windowDidResize();
    window.addEventListener('resize', this.windowDidResize);

    this.serviceOptions_dogPic.servicePath = this.dataSheets['dogPic'].expandSlotTemplateString("", this.dataSlots);
    this.loadData_jsonsrc1(this.dataSheets['dogPic'], this.serviceOptions_dogPic, true);
    
    this.serviceOptions_DOGSCollection.servicePath = this.dataSheets['DOGSCollection'].expandSlotTemplateString("dogs", this.dataSlots);
    this.loadData_dogDatabase(this.dataSheets['DOGSCollection'], this.serviceOptions_DOGSCollection, true);
    
    this.serviceOptions_reviews.servicePath = this.dataSheets['reviews'].expandSlotTemplateString("review", this.dataSlots);
    this.loadData_dogDatabase(this.dataSheets['reviews'], this.serviceOptions_reviews, true);
    
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.windowDidResize);
  }

  isLoading() {
    return this.state.loading;
  }

  goToScreen = (screenId, props) => {
    // This method is the default implementation and could be customized by a navigation plugin.

    let screenIdx = -1;  // Check if the screen is already in the history stack, and pop back if so
    for (let i = 0; i < this.screenHistory.length; i++) {
      if (this.screenHistory[i].currentScreen === screenId) {
        screenIdx = i;
        break;
      }
    }
    if (screenIdx > -1) {
      this.screenHistory.splice(screenIdx + 1, this.screenHistory.length - screenIdx - 1);
      let prevScreenState = this.screenHistory[screenIdx];
      this.setState({...prevScreenState, screenTransitionForward: false});
    }
    else {
      props = props || {};
      let screenState = {currentScreen: screenId, currentScreenProps: props};
      this.screenHistory.push(screenState);
      this.setState({...screenState, screenTransitionForward: true});
    }
    window.scrollTo(0, 0);
  }

  goBack = () => {
    // This method is the default implementation and could be customized by a navigation plugin.
    if (this.screenHistory.length < 2)
      return;

    this.screenHistory.splice(this.screenHistory.length - 1, 1);
    let prevScreenState = this.screenHistory[this.screenHistory.length - 1];
    this.setState({...prevScreenState, screenTransitionForward: false});
    window.scrollTo(0, 0);
  }

  getDataSheet = (sheetId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    return this.dataSheets[sheetId];
  }

  addToDataSheet = (sheetId, newRow, actionId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    let sheet = this.dataSheets[sheetId];
    if (sheet && newRow) {
      sheet.addItem(newRow, this['serviceOptions_'+sheetId] || {});
    }
    this.setState({});
  }

  updateInDataSheet = (sheetId, row, actionId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    let sheet = this.dataSheets[sheetId];
    if (sheet && row) {
      sheet.replaceItemByKey(row.key, row, this['serviceOptions_'+sheetId] || {});

      if (this.state.currentScreenProps.dataSheetRow) {
        let screenProps = {...this.state.currentScreenProps};
        screenProps.dataSheetRow = row;

        // Also update any props that were carried into a detail view
        for (let prop in screenProps) {
          if (row[prop] !== undefined) {
            screenProps[prop] = row[prop];
          }
        }
        this.setState({currentScreenProps: screenProps});
      } else {
        this.setState({});
      }
    }
  }

  removeFromDataSheet = (sheetId, row) => {
    let sheet = this.dataSheets[sheetId];
    if (sheet && row) {
      sheet.removeItem(row, this['serviceOptions_'+sheetId] || {});
    }
    this.setState({});
  }

  updateDataSlot = (slotId, value, actionId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    this.dataSlots[slotId] = value;
    if (slotId === 'ds_activeLang') {
      this.locStrings.setLanguage(value);
    }

    {
      let usedSlots = [];
      let servicePath = this.dataSheets['DOGSCollection'].expandSlotTemplateString("dogs", this.dataSlots, usedSlots);
      if (usedSlots.includes(slotId)) {
        // if data sheet's content depends on this slot, reload it now
        this.serviceOptions_DOGSCollection.servicePath = servicePath;
        this.loadData_dogDatabase(this.dataSheets['DOGSCollection'], this.serviceOptions_DOGSCollection, true);
      }
    }
    if (this.serviceOptions_reviews.query.length > 0) {
      let usedSlots = [];
      this.dataSheets['reviews'].expandSlotTemplateString(this.serviceOptions_reviews.query, {}, usedSlots);
      if (usedSlots.includes(slotId)) {
        // if data sheet's content depends on this slot, reload it now
        this.loadData_dogDatabase(this.dataSheets['reviews'], this.serviceOptions_reviews, true);
      }
    }
    
    {
      let usedSlots = [];
      let servicePath = this.dataSheets['reviews'].expandSlotTemplateString("review", this.dataSlots, usedSlots);
      if (usedSlots.includes(slotId)) {
        // if data sheet's content depends on this slot, reload it now
        this.serviceOptions_reviews.servicePath = servicePath;
        this.loadData_dogDatabase(this.dataSheets['reviews'], this.serviceOptions_reviews, true);
      }
    }
    this.setState({});
  }

  dataSheetDidUpdate = (dataSheet) => {
    // This method is the default implementation and could be customized by a state management plugin.
    this.setState({});
  }

  updateLocalizationFromDataSheet = (dataSheet) => {
    const stringsObj = dataSheet.getStringsByLanguage();
    if (stringsObj && Object.keys(stringsObj).length > 0) {
      this.locStrings = new LocalizedStrings(stringsObj);
    } else {
      this.locStrings = new LocalizedStrings({en: {}});
    }
    this.locStrings.setLanguage(this.dataSlots['ds_activeLang']);
  }

  loadData_jsonsrc1 = (dataSheet, options, firstLoad) => {
    // This method was written by data plugin 'Generic JSON'.
   this.setState({loading: true});
    
    // clear any placeholder data before load
    if (firstLoad) {
    	dataSheet.items = [];
    }
    
    const fetchComplete = (err) => {
      if (err) {
        // This error handling comes from React Studio
        // and currently doesn't do anything useful.
        console.error('** Web service load failed: ', err);
      } else {
      }
      this.setState({loading: false});
    }
    
    const url = dataSheet.urlFromOptions(options);  // this method was written by the web service plugin
    
    const fetchOpts = {
      method: 'GET',
      headers: {},
    };
    
    fetch(url, fetchOpts)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Server error: "+response.status);
        }
        return response.json();
      })
      .then((json) => {
        dataSheet.loadFromJson(json);
        fetchComplete(null, options);
      })
      .catch((exc) => {
        fetchComplete(exc, options);
      });
  }
  loadData_dogDatabase = (dataSheet, options, firstLoad) => {
    // This method was written by data plugin 'Firebase (Cloud Firestore)'.
   this.setState({loading: true});
    
    // clear any placeholder data before load
    if (firstLoad) {
      dataSheet.items = [];
    }
    
    const fetchComplete = (err) => {
      if (err) {
        // This error handling comes from React Studio
        // and currently doesn't do anything useful.
        console.error('** Web service load failed: ', err);
      } else {
      }
      this.setState({loading: false});
    }
    
    const db = firebase.firestore();
    const collection = db.collection(options.servicePath);
    const query = dataSheet.expandSlotTemplateString(options.query, this.dataSlots);
    let queryObj;
    
    if (query.length < 1) {
      queryObj = collection;
    } else {
      console.log("loading firebase data for '%s' with query: %s", options.servicePath, query);
      try {
        queryObj = eval(`(function(c){ return c.${query}; })(collection)`);
      } catch (e) {
        console.log("** error creating firebase query object from '%s': ", query, e)
        return;
      }
    }
    
    queryObj.onSnapshot(
      (querySnapshot) => {
        let jsonArr = [];
        
        if (querySnapshot.docs) {
          querySnapshot.forEach((doc) => {
            const data = { ...doc.data(), document_key: doc.id };
            jsonArr.push(data);
          });
        } else if (querySnapshot.data) {
          const doc = querySnapshot;
          const data = { ...doc.data(), document_key: doc.id };
          jsonArr.push(data);
        }    
            
        dataSheet.loadFromJson(jsonArr);
        fetchComplete(null, options);  
      },
      (err) => {
        fetchComplete(err, options);
      });  
    
    
     /*
    dbLoadingPromise.get().then((querySnapshot) => {
        let jsonArr = [];
    
        querySnapshot.forEach((doc) => {
          const data = { ...doc.data(), key: doc.id };
          jsonArr.push(data);
        });
            
        dataSheet.loadFromJson(jsonArr);
        fetchComplete(null, options);
      },
      (err) => {
        fetchComplete(err, options);
      });  
      */
    
  }

  render() {
    let makeElementForScreen = (screenId, baseProps, atTop, forward) => {
      let screenProps = {
        ...baseProps,
        atTopOfScreenStack: atTop,
        transitionForward: forward,
        appActions: this,
        dataSheets: this.dataSheets,
        locStrings: this.locStrings,
        deviceInfo: {
          screenFormatId: this.state.screenFormatId
        },
        'ds_activeLang': this.dataSlots['ds_activeLang'],
        'ds_SlotUserID': this.dataSlots['ds_SlotUserID'],
        'ds_SlotUserName': this.dataSlots['ds_SlotUserName'],
        'ds_SlotUserEmail': this.dataSlots['ds_SlotUserEmail'],
        'ds_SlotUserPhoto': this.dataSlots['ds_SlotUserPhoto'],
        'ds_SlotUserReviewRating': this.dataSlots['ds_SlotUserReviewRating'],
        'ds_SelectedDogID': this.dataSlots['ds_SelectedDogID'],
        'ds_SelectedDogPicture': this.dataSlots['ds_SelectedDogPicture'],
        'ds_Slot 9': this.dataSlots['ds_Slot 9'],
      };
      // A data sheet row was specified as the data source for this screen, so carry those props + 'dataSheetRow'.
      const dataSheetRow_ReviewDogsScreen = this.dataSheets['DOGSCollection'].items[0];
      const screenData_ReviewDogsScreen = {
        ...dataSheetRow_ReviewDogsScreen,
        dataSheetRow: dataSheetRow_ReviewDogsScreen,
      }
      // A data sheet row was specified as the data source for this screen, so carry those props + 'dataSheetRow'.
      const dataSheetRow_DOGSTOREVIEWScreen = this.dataSheets['DOGSCollection'].items[0];
      const screenData_DOGSTOREVIEWScreen = {
        ...dataSheetRow_DOGSTOREVIEWScreen,
        dataSheetRow: dataSheetRow_DOGSTOREVIEWScreen,
      }
      // A data sheet row was specified as the data source for this screen, so carry those props + 'dataSheetRow'.
      const dataSheetRow_StartPageScreen = this.dataSheets['dogPic'].items[0];
      const screenData_StartPageScreen = {
        ...dataSheetRow_StartPageScreen,
        dataSheetRow: dataSheetRow_StartPageScreen,
      }
      switch (screenId) {
        default:
          return null;
        case 'reviewdogs':
          return (<ReviewDogsScreen {...screenProps} {...screenData_ReviewDogsScreen} />)
        case 'dogstoreview':
          return (<DOGSTOREVIEWScreen {...screenProps} {...screenData_DOGSTOREVIEWScreen} />)
        case 'login':
          return (<LoginScreen {...screenProps} />)
        case 'startpage':
          return (<StartPageScreen {...screenProps} {...screenData_StartPageScreen} />)
      }
    }

    let screenEl = makeElementForScreen(this.state.currentScreen, this.state.currentScreenProps, true, this.state.screenTransitionForward);
    let prevScreenEl = null;
    if (this.screenHistory.length >= 2) {  // For transitions, we want to show the previous screen below
      let prevScreenState = this.screenHistory[this.screenHistory.length - 2];
      prevScreenEl = makeElementForScreen(prevScreenState.currentScreen, prevScreenState.currentScreenProps, false, this.state.screenTransitionForward);
    }

    return (
      <div className="App">
        {prevScreenEl}
        {screenEl}
      </div>
    );
  }
}
