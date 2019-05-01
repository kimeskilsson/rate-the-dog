import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_localizationSheet extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text_120032";
    item['en'] = " ";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text_481659";
    item['en'] = "RATE THE DOGGO";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button_522956";
    item['en'] = "LOGIN TO RATE DOGS";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen3_text_553022";
    item['en'] = "RATE THE DOGGO";
    
    item = {};
    this.items.push(item);
    item['key'] = "n_fab_198646";
    item['en'] = "Go back";
    
    item = {};
    this.items.push(item);
    item['key'] = "dogs_button_407751";
    item['en'] = "REVIEW ME";
    
    item = {};
    this.items.push(item);
    item['key'] = "reviewdogs_button_88465";
    item['en'] = "POST REVIEW";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp1_button_613800";
    item['en'] = "REVIEW ME";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp2_text_446672";
    item['en'] = "RATE THE DOG";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp3_button_634845";
    item['en'] = "REVIEW ME";
    
    item = {};
    this.items.push(item);
    item['key'] = "dogstoreview_button_977173";
    item['en'] = "RATE ME";
    
    item = {};
    this.items.push(item);
    item['key'] = "dogstoreview_button_162406";
    item['en'] = "RATE ME";
    
    item = {};
    this.items.push(item);
    item['key'] = "dogstoreview_buttoncopy_187373";
    item['en'] = "RATE ME";
    
    item = {};
    this.items.push(item);
    item['key'] = "dogstoreview_buttoncopy2_928495";
    item['en'] = "RATE ME";
    
    item = {};
    this.items.push(item);
    item['key'] = "reviewdogs_button2_193077";
    item['en'] = "GO BACK ";
    
    item = {};
    this.items.push(item);
    item['key'] = "dogstoreview_buttoncopy3_865674";
    item['en'] = "RATE ME";
    
    item = {};
    this.items.push(item);
    item['key'] = "dogstoreview_buttoncopy4_1008560";
    item['en'] = "RATE ME";
  }

  getStringsByLanguage = () => {
    let stringsByLang = {};
    for (let row of this.items) {
      const locKey = row.key;
      for (let key in row) {
        if (key === 'key')
          continue;
        let langObj = stringsByLang[key] || {};
        langObj[locKey] = row[key];
        stringsByLang[key] = langObj;
      }
    }
    return stringsByLang;
  }

}
