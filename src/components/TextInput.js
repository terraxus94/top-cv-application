import React, { Component } from 'react';
class TextInput extends Component {
  render() {
    return (
      <input
        type="text"
        id={this.props.id || ''}
        name={this.props.name || ''}
        placeholder={this.props.placeholder || ''}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
    );
  }
}

export default TextInput;
