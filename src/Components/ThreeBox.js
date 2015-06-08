import React, { Component } from 'react';
var box = require('../lib/box.js');

export default class ThreeBox extends Component {
  handleChange(e) {
    this.props.onChange(this.props.name , e.target.value);
  }

  componentDidMount() {
    box.init({
      'canvas': document.getElementById('canvas_for_three')
    });
  }

  render() {
    box.update(this.props.modelState);
    return (
      <div>
        <canvas id = 'canvas_for_three'></canvas>
      </div>
    );
  }
}
