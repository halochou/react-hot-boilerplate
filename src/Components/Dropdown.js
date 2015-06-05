import React, { Component } from 'react';

export default class Dropdown extends Component {
  render() {
    let options = this.props.options.map(
      option => <option value={option.value}>{option.label}</option>
      );

    return (
      <select onChange={this.props.onChange} >
        {options}
      </select>
    );
  }
}
