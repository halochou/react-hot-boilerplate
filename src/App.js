import React, { Component } from 'react';
import Dropdown from './Components/Dropdown';
import ThreeBox from './Components/ThreeBox';


let fullOptions = {
  button : [
    { value: 'single-breasted_1', label: 'S1' },
    { value: 'single-breasted_2', label: 'S2' },
    { value: 'single-breasted_3', label: 'S3' },
    { value: 'double-breasted_2', label: 'D2' },
    { value: 'double-breasted_4', label: 'D4' },
    { value: 'double-breasted_6', label: 'D6' }
  ],

  collar : [
    { value: 'peaked_lapel', label: 'Peaked' },
    { value: 'notch_lapel', label: 'Notch' }
  ],

  tail : [
    { value: 'side', label: 'Side' },
    { value: 'none', label: 'None' },
    { value: 'back', label: 'Back' }
  ],

  pocket : [
    { value: 'lean', label: 'Lean' },
    { value: 'regular', label: 'Regular' },
    { value: 'two_horn', label: 'TwoHorn' }
  ],

  fabric : [
    { value: 'black', label: 'Black' },
    { value: 'blue', label: 'Blue' }
  ]
};

let filters = {
  fabric() {return true;},
  button() {return true;},
  pocket() {return true;},
  tail(opt){
    if(this.state.button.startsWith('double')){
      return opt.value != 'back';
    } else {
      return true;
    }
  },
  collar(opt){
    if(this.state.button.startsWith('double')){
      return opt.value != 'peaked_lapel';
    } else {
      return true;
    }
  }
}

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      fabric: 'black',
      button: 'single-breasted_1',
      tail: 'side',
      pocket: 'lean',
      collar: 'peaked_lapel' 
    };
  }

  _handleDropdownChange(name, value) {
    console.log(name, value);
    this.setState({[name]: value});
  }

  render() {
    let optionList = ['fabric', 'button', 'tail', 'pocket', 'collar'];
    let dropdowns = optionList.map(opt => <Dropdown options={fullOptions[opt].filter(filters[opt].bind(this))} onChange={this._handleDropdownChange.bind(this)} name={opt} />)
    return (
      <div>
        <div className="row">
          {dropdowns}
        </div>
        <div className="row">
          <ThreeBox modelState={this.state} />
        </div>
      </div>
    );
  }
}
