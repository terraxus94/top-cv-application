import React, { Component } from 'react';
import '../styles/CVApplicationForm.css';
import GeneralInformationForm from './GeneralInformationForm.js';
import EducationInputs from './EducationInputs.js';
import GeneralInformationPreview from './GeneralInformationPreview.js';
import EducationPreview from './EducationPreview.js';

class CVApplicationForm extends Component {
  constructor() {
    super();

    this.state = {
      editingMode: true,
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
            id: 0,
            school: '',
            eduStartDate: '',
            eduEndDate: '',
            title: '',
          },
        ],
      },
    };
  }

  handleChange = (formType, key, value, groupID) => {
    if (formType === 'generalInfo') {
      this.setState({
        ...this.state,
        formData: {
          ...this.state.formData,
          generalInfo: {
            ...this.state.formData.generalInfo,
            [key]: value,
          },
        },
      });
    }

    if (formType === 'education') {
      const updatedElements = this.state.formData.education.map((element) => {
        if (element.id === Number(groupID)) {
          return { ...element, [key]: value };
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

  getEduValue = (key, id) => {
    return this.state.formData.education.find(
      (section) => Number(section.id) === Number(id)
    )[key];
  };

  deleteEducationSection = (id) => {
    const newEduElements = this.state.formData.education.filter((element) => {
      return element.id !== Number(id);
    });

    this.setState({
      ...this.state,
      formData: {
        ...this.state.formData,
        education: newEduElements,
      },
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
            id: this.state.formData.education.length,
            school: '',
            eduStartDate: '',
            eduEndDate: '',
            title: '',
          },
        ],
      },
    });
  };

  changeMode = () => {
    const newMode = this.state.editingMode === true ? false : true;

    this.setState({
      editingMode: newMode,
    });
  };

  render() {
    return (
      <div className="bg-gray-100 ">
        <div className=" mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold underline">CV generator</h1>
          {this.state.editingMode === true && (
            <form>
              <div>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                  <GeneralInformationForm
                    handleChange={this.handleChange}
                    state={this.state}
                  />
                </div>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                  <div className="flex flex-col gap-2">
                    <h2>Education</h2>
                    {this.state.formData.education.map((section, i) => {
                      if (i === 0) {
                        return (
                          <EducationInputs
                            key={section.id}
                            deletable={false}
                            id={section.id}
                            onDeleteSection={this.deleteEducationSection}
                            handleChange={this.handleChange}
                            state={this.state}
                            getEduValue={this.getEduValue}
                          />
                        );
                      }
                      return (
                        <EducationInputs
                          key={section.id}
                          deletable={true}
                          id={section.id}
                          onDeleteSection={this.deleteEducationSection}
                          handleChange={this.handleChange}
                          state={this.state}
                          getEduValue={this.getEduValue}
                        />
                      );
                    })}
                    <button
                      type="button"
                      className="p-5  bg-indigo-600 hover:bg-indigo-700 hover:ring-indigo-500 hover:ring-offset-indigo-200 text-white  transition ease-in duration-200  text-xl font-extrabold shadow-md hover:outline-none hover:ring-2 hover:ring-offset-2  rounded-full w-4 h-4 flex items-center justify-center "
                      onClick={(e) => {
                        this.updateEducationElements();
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <input
                  type="button"
                  value="Preview mode"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={this.changeMode}
                />
              </div>
            </form>
          )}
          {this.state.editingMode === false && (
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
        </div>
      </div>
    );
  }
}

export default CVApplicationForm;

// known mistakes
// not sure what should be a component and what not, how deep do we go
// kad nesto ide u constructor a kad u render dio npr
// https://reactjs.org/docs/conditional-rendering.html#:~:text=It%20will%20render%20either%20%3CLoginButton%20/%3E%20or%20%3CLogoutButton%20/%3E%20depending%20on%20its%20current%20state.%20It%20will%20also%20render%20a%20%3CGreeting%20/%3E%20from%20the%20previous%20example%3A
// conditional rendering unutar postojece komponente? nove komponente samo za conditional? passati kao prop? cijeli kod ili sekciju po sekciju s istim criteria?
// state spread thing
// local edit state

// to do
// u change handlerima šalješ cijeli e, a koristiš samo e.target.value, mogo si odmah.. al tu je onda razlika šta na tvoj način samo jednom napišeš taj dio koda, a onako bi morao svaki put kad zoveš funkciju
