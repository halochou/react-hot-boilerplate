import React, { Component } from 'react';
import Dropdown from './Components/Dropdown';

let options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' }
];

let _handleDropdownChange = function(evt) {
  console.log(evt.target.value);
};

export default class App extends Component {
  render() {
    return (
      <div>
        <Dropdown options={options} onChange={_handleDropdownChange}/>
        <Dropdown options={options} onChange={_handleDropdownChange}/>
        <Dropdown options={options} onChange={_handleDropdownChange}/>
        <Dropdown options={options} onChange={_handleDropdownChange}/>
        <Dropdown options={options} onChange={_handleDropdownChange}/>
      </div>
    );
  }
}
