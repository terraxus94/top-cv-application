import React from 'react';
function TextInput(props) {
  return (
    <input
      type="text"
      id={props.id || ''}
      name={props.name || ''}
      placeholder={props.placeholder || ''}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      onChange={props.handleChange}
      disabled={props.disabled}
    />
  );
}

export default TextInput;
