import React, { Component } from 'react';
import Dropdown from './Components/Dropdown';
import ThreeBox from './Components/ThreeBox';

let buttonOpts = [
    { value: 'single-breasted_1', label: 'S1' },
    { value: 'single-breasted_2', label: 'S2' },
    { value: 'single-breasted_3', label: 'S3' },
    { value: 'double-breasted_2', label: 'D2' },
    { value: 'double-breasted_4', label: 'D4' },
    { value: 'double-breasted_6', label: 'D6' }
];

let collarOpts = [
    { value: 'peaked_lapel', label: 'Peaked' },
    { value: 'notch_lapel', label: 'Notch' }
];

let tailOpts = [
    { value: 'side', label: 'Side' },
    { value: 'none', label: 'None' },
    { value: 'back', label: 'Back' }
];

let pocketOpts = [
    { value: 'lean', label: 'Lean' },
    { value: 'regular', label: 'Regular' },
    { value: 'two_horn', label: 'TwoHorn' }
];

let fabricOpts = [
    { value: 'black', label: 'Black' },
    { value: 'blue', label: 'Blue' }
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      fabric: 'black',
      button: 'single-breasted_2',
      tail: 'side',
      pocket: 'lean',
      collar: 'peaked_lapel' 
    };
  }

  _handleDropdownChange(name, value) {
    this.setState({[name]: value});
    //console.log(name, value);
  }

  tailFilter(opt){
    // if(this.state.button)
    return true;
    // opt => opt.value != 'back' 
  }

  render() {
    // let optionList = ['fabric', 'button', 'tail', 'pocket', 'collar'];
    return (
      <div>
        <div>
          <Dropdown options={fabricOpts} onChange={this._handleDropdownChange.bind(this)} name="fabric" value={this.state.fabric}  />
          <Dropdown options={buttonOpts} onChange={this._handleDropdownChange.bind(this)} name="button" value={this.state.button} />
          <Dropdown options={tailOpts} onChange={this._handleDropdownChange.bind(this)} name="tail" value={this.state.tail} filter={this.tailFilter.bind(this)} />
          <Dropdown options={pocketOpts} onChange={this._handleDropdownChange.bind(this)} name="pocket" value={this.state.pocket} />
          <Dropdown options={collarOpts} onChange={this._handleDropdownChange.bind(this)} name="collar" value={this.state.collar} />
        </div>
        <div>
          <ThreeBox modelState={this.state} />
        </div>
      </div>
    );
  }
}
