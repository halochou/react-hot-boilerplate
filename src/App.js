import React, { Component } from 'react';
import Dropdown from './Components/Dropdown';
import ThreeBox from './Components/ThreeBox';

let buttonOpts = [
    { value: 'single_breasted_1', label: 'S1' },
    { value: 'single_breasted_2', label: 'S2' },
    { value: 'single_breasted_3', label: 'S3' },
    { value: 'double_breasted_2', label: 'D2' },
    { value: 'double_breasted_4', label: 'D4' },
    { value: 'double_breasted_6', label: 'D6' }
];

let collarOpts = [
    { value: 'peaked_lapel', label: 'Peaked' },
    { value: 'notch_lapen', label: 'Notch' }
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
      button: 'single_breasted_1',
      tail: 'side',
      pocket: 'lean',
      collar: 'peaked_lapel' 
    };
  }

  _handleDropdownChange(name, value) {
    this.setState({[name]: value});
    console.log(name, value);
  }

  render() {
    // let optionList = ['fabric', 'button', 'tail', 'pocket', 'collar'];
    return (
      <div>
        <div>
          <Dropdown options={fabricOpts} onChange={this._handleDropdownChange.bind(this)} name="fabric" value={this.state.fabric} />
          <Dropdown options={buttonOpts} onChange={this._handleDropdownChange.bind(this)} name="button" value={this.state.button} />
          <Dropdown options={tailOpts} onChange={this._handleDropdownChange.bind(this)} name="tail" value={this.state.tail} />
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
