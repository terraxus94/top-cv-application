import React, { Component } from 'react';
import EducationInputs from './EducationInputs.js';

class EducationForm extends Component {
  constructor() {
    super();

    this.state = {
      formElements: [
        {
          element: <EducationInputs key="0" id="0" />,
          id: '0',
        },
      ],
    };
  }

  createAdditionalEducation = (e) => {
    this.setState({
      formElements: [
        ...this.state.formElements,
        {
          element: (
            <EducationInputs
              key={this.state.formElements.length}
              deletable="true"
              id={this.state.formElements.length}
              onDeleteSection={this.deleteSection}
            />
          ),
          id: this.state.formElements.length,
        },
      ],
    });
  };

  deleteSection = (id) => {
    const newSections = this.state.formElements.filter((section) => {
      if (section.id !== Number(id)) {
        return section;
      }
    });
    this.setState({
      formElements: newSections,
    });
  };

  render() {
    return (
      <div className="flex flex-col gap-2">
        <h2>Education</h2>
        <form>
          {this.state.formElements.map((section, i) => {
            return section.element;
          })}
        </form>
        <button
          type="button"
          className="p-5  bg-indigo-600 hover:bg-indigo-700 hover:ring-indigo-500 hover:ring-offset-indigo-200 text-white  transition ease-in duration-200  text-xl font-extrabold shadow-md hover:outline-none hover:ring-2 hover:ring-offset-2  rounded-full w-4 h-4 flex items-center justify-center "
          onClick={(e) => {
            this.createAdditionalEducation();
          }}
        >
          +
        </button>
      </div>
    );
  }
}

export default EducationForm;
