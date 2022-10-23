import '../styles/CVApplicationForm.css';
import EducationForm from './EducationForm.js';
import GeneralInformationForm from './GeneralInformationForm.js';
import PracticalExperienceForm from './PracticalExperienceForm.js';
import React, { Component } from 'react';

class CVApplicationForm extends Component {
  render() {
    return (
      <div className="bg-gray-100">
        <h1 className="text-3xl font-bold underline">CV generator</h1>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <GeneralInformationForm />
        </div>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <EducationForm />
        </div>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <PracticalExperienceForm />
        </div>
      </div>
    );
  }
}

export default CVApplicationForm;
