import React from 'react';
function Label(props) {
  return (
    <label
      htmlFor={props.for || ''}
      className="block text-sm font-medium text-gray-700"
    >
      {props.labelText || ''}
    </label>
  );
}

export default Label;
