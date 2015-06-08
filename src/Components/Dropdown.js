import React, { Component } from 'react';

export default class Dropdown extends Component {
  handleChange(e) {
    this.props.onChange(this.props.name , e.target.value);
  }

  render() {
    let options = [];
    if(this.props.filter){
      options = this.props.options.filter(this.props.filter).map(
        option => <option value={option.value}>{option.label}</option>
        );
    } else {
      options = this.props.options.map(
        option => <option value={option.value}>{option.label}</option>
        );
    }

    return (
      <div>
        <select value={this.props.value} onChange={this.handleChange.bind(this)}>
          {options}
        </select>
      </div>
    );
  }
}
