import React, { Component } from 'react';
import EducationInputs from './EducationInputs.js';

class EducationForm extends Component {
  createAdditionalEducationInput = (e) => {
    this.props.updateEducationElements();
  };

  render() {
    return (
      <div className="flex flex-col gap-2">
        <h2>Education</h2>
        <EducationInputs
          id="99"
          handleChange={this.props.handleChange}
          state={this.props.state}
          // updateEducationElements={this.updateEducationElements}
          updateValue={this.props.updateValue}
        />
        {this.props.state.formElements.map((section, i) => {
          return section.element;
        })}
        <button
          type="button"
          className="p-5  bg-indigo-600 hover:bg-indigo-700 hover:ring-indigo-500 hover:ring-offset-indigo-200 text-white  transition ease-in duration-200  text-xl font-extrabold shadow-md hover:outline-none hover:ring-2 hover:ring-offset-2  rounded-full w-4 h-4 flex items-center justify-center "
          onClick={(e) => {
            this.createAdditionalEducationInput();
          }}
        >
          +
        </button>
      </div>
    );
  }
}

export default EducationForm;
