import React, { Component } from 'react';

export default class Dropdown extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      value: this.props.options[0].value
    };
  }

  handleChange(e) {
    this.setState({value: e.target.value});
    this.props.onChange(this.props.name , e.target.value);
  }

  componentWillReceiveProps(nextProps){
    if(!nextProps.options.some(opt => opt.value == this.state.value)){
      this.setState({value: nextProps.options[0].value});
      nextProps.onChange(nextProps.name , nextProps.options[0].value);
    }
  }

  render() {
    let options = this.props.options.map(
        option => <option value={option.value}>{option.label}</option>
        );

    return (
      <div className="col-md-2">
        {this.props.name}: 
        <select value={this.state.value} onChange={this.handleChange.bind(this)}>
          {options}
        </select>
      </div>
    );
  }
}
