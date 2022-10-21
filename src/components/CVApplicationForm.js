import '../styles/CVApplicationForm.css';
import EducationForm from './EducationForm.js';
import GeneralInformationForm from './GeneralInformationForm.js';
import PracticalExperienceForm from './PracticalExperienceForm.js';

function CVApplicationForm() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">CV generator</h1>
      <GeneralInformationForm />
      <EducationForm />
      <PracticalExperienceForm />
    </div>
  );
}

export default CVApplicationForm;
