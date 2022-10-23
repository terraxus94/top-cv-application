import React, { Component } from 'react';
class Label extends Component {
  render() {
    return (
      <label
        htmlFor={this.props.for || ''}
        className="block text-sm font-medium text-gray-700"
      >
        {this.props.labelText || ''}
      </label>
    );
  }
}

export default Label;
