import React, { Component } from 'react';
import Dropdown from './Components/Dropdown';

let options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' }
];

let _handleChange = function(evt) {
  console.log(evt.target.value);
};

export default class App extends Component {
  render() {
    return (
      <Dropdown options={options} onChange={_handleChange}/>
    );
  }
}
