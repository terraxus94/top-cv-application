import React, { Component } from 'react';
import '../styles/CVApplicationForm.css';
import EducationForm from './EducationForm.js';
import GeneralInformationForm from './GeneralInformationForm.js';
import EducationInputs from './EducationInputs.js';
import GeneralInformationPreview from './GeneralInformationPreview.js';
import EducationPreview from './EducationPreview.js';

class CVApplicationForm extends Component {
  constructor() {
    super();

    this.state = {
      mode: 'isEditing', // isEditing || isPreview
      formData: {
        generalInfo: {
          firstName: '',
          lastName: '',
          telPrefix: '',
          telNumber: '',
          country: '',
          city: '',
          additionalInfo: '',
        },
        education: [
          {
            id: 99,
            school: '',
            startDate: '',
            endDate: '',
            title: '',
          },
        ],
      },
      formElements: [],
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleChange = (formType, key, e) => {
    if (formType === 'generalInfo') {
      this.setState({
        ...this.state,
        formData: {
          ...this.state.formData,
          generalInfo: {
            ...this.state.formData.generalInfo,
            [key]: e.target.value,
          },
        },
      });
    }

    if (formType === 'education') {
      const groupID = Number(
        e.target.parentElement.parentElement.parentElement.parentElement.id
      );
      // const inputID = e.target.id; // ovo je isto kao key koji saljem TBD sto je bolje

      const updatedElements = this.state.formData.education.map((element) => {
        if (element.id === groupID) {
          return { ...element, [key]: e.target.value };
        }
        return element;
      });

      this.setState({
        ...this.state,
        formData: {
          ...this.state.formData,
          education: updatedElements,
        },
      });
    }
  };
  // has this been completed?
  handleEduValue = (formType, key, id) => {
    this.state.formData.education.map((e) => {
      console.log(e.id);
      console.log(id);
      if (e.id === id) return e[key];
    });
    // const value = this.state.formData.education.filter((element) => {
    //   if (element.id) {
    //     return;
    //   }
    // });
  };

  deleteEducationSection = (id) => {
    const newSections = this.state.formElements.filter((section) => {
      if (section.id !== Number(id)) {
        return section;
      }
    });

    const newEduValues = this.state.formData.education.filter((element) => {
      return element.id !== Number(id);
    });

    this.setState({
      ...this.state,
      formData: {
        ...this.state.formData,
        education: newEduValues,
      },
      formElements: newSections,
    });
  };

  updateEducationElements = (e) => {
    this.setState({
      ...this.state,
      formData: {
        ...this.state.formData,
        education: [
          ...this.state.formData.education,
          {
            id: this.state.formElements.length,
            school: '',
            startDate: '',
            endDate: '',
            title: '',
          },
        ],
      },
      formElements: [
        ...this.state.formElements,
        {
          element: (
            <EducationInputs
              key={this.state.formElements.length}
              deletable="true"
              id={this.state.formElements.length}
              onDeleteSection={this.deleteEducationSection}
              handleChange={this.handleChange}
              state={this.props.state}
              updateValue={this.handleEduValue}
            />
          ),
          id: this.state.formElements.length,
        },
      ],
    });
  };

  changeMode = () => {
    const newMode = this.state.mode === 'isEditing' ? 'isPreview' : 'isEditing';

    this.setState({
      mode: newMode,
    });
  };

  render() {
    return (
      <div className="bg-gray-100">
        <h1 className="text-3xl font-bold underline">CV generator</h1>
        <form>
          {' '}
          //I dont need the form in preview mode, move the form and parent
          elements inside cond rend
          {this.state.mode === 'isEditing' && (
            <div>
              <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                <GeneralInformationForm
                  handleChange={this.handleChange}
                  state={this.state}
                />
              </div>
              <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                <EducationForm
                  handleChange={this.handleChange}
                  state={this.state}
                  updateEducationElements={this.updateEducationElements}
                  updateValue={this.handleEduValue}
                />
              </div>
              <input
                type="button"
                value="Preview mode"
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={this.changeMode}
              />
            </div>
          )}
          {this.state.mode === 'isPreview' && (
            <div>
              <GeneralInformationPreview state={this.state} />
              <EducationPreview state={this.state} />
              <input
                type="button"
                value="Edit mode"
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={this.changeMode}
              />
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default CVApplicationForm;

// to do
// save form inputs to state - cheggity chek
// differentiate between preview and edit mode on the same layout
// the preview/edit mode should be global, changing all fields to the specified mode
// in preview mode on hover over the fields show an edit button which on click turns the preview field into input
// required input

// known mistakes
// mmm yeeees everything needs to be a component
// apsolutni kaos sa propsima probably due to above, what should be a child component method instead of the parent?\
// kad nesto ide u constructor a kad u render dio npr
// https://reactjs.org/docs/conditional-rendering.html#:~:text=It%20will%20render%20either%20%3CLoginButton%20/%3E%20or%20%3CLogoutButton%20/%3E%20depending%20on%20its%20current%20state.%20It%20will%20also%20render%20a%20%3CGreeting%20/%3E%20from%20the%20previous%20example%3A
// conditional rendering unutar postojece komponente? nove komponente samo za conditional? passati kao prop? cijeli kod ili sekciju po sekciju s istim criteria?
// I hate spreading edit: bolje updateat state sa .map ili ono spread sranje...
// id=99 facepalm.jpg

let testState = {
  mode: 'isEditing',
  formData: {
    generalInfo: {
      firstName: 'Antonio',
      lastName: 'Marusic',
      telPrefix: '385',
      telNumber: '0993858333',
      country: 'Croatia',
      city: 'Pula',
      additionalInfo: 'Stanislav',
    },
    education: [
      {
        id: 99,
        school: 'MZ',
        startDate: '2022-12-01',
        endDate: '2022-12-01',
        title: 'Osnovnoskolac',
      },
      {
        id: 1,
        school: 'PMG',
        startDate: '2022-12-02',
        endDate: '2022-12-02',
        title: 'Srednjoskolac',
      },
    ],
  },
  formElements: [
    {
      element: '<EducationInputs />',
      id: 0,
    },
  ],
};
