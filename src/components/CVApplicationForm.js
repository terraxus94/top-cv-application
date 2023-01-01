import React, { useState } from 'react';
import '../styles/CVApplicationForm.css';
import GeneralInformationForm from './GeneralInformationForm.js';
import EducationInputs from './EducationInputs.js';
import GeneralInformationPreview from './GeneralInformationPreview.js';
import EducationPreview from './EducationPreview.js';

function CVApplicationForm() {
  const [editingMode, setEditingMode] = useState(true);
  const [generalInfo, setGeneralInfo] = useState({
    firstName: '',
    lastName: '',
    telPrefix: '',
    telNumber: '',
    country: '',
    city: '',
    additionalInfo: '',
  });
  const [educationInfo, setEducationInfo] = useState([
    {
      id: 0,
      school: '',
      eduStartDate: '',
      eduEndDate: '',
      title: '',
    },
  ]);

  const handleChange = (formType, key, value, groupID) => {
    if (formType === 'generalInfo') {
      setGeneralInfo({ ...generalInfo, [key]: value });
    }

    if (formType === 'education') {
      const updatedElements = educationInfo.map((element) => {
        if (element.id === Number(groupID)) {
          return { ...element, [key]: value };
        }
        return element;
      });

      setEducationInfo(updatedElements);
    }
  };

  const getEduValue = (key, id) => {
    return educationInfo.find((section) => Number(section.id) === Number(id))[
      key
    ];
  };

  const deleteEducationSection = (id) => {
    const newEduElements = educationInfo.filter((element) => {
      return element.id !== Number(id);
    });

    setEducationInfo(newEduElements);
  };

  const updateEducationElements = (e) => {
    setEducationInfo([
      ...educationInfo,
      {
        id: educationInfo.length,
        school: '',
        eduStartDate: '',
        eduEndDate: '',
        title: '',
      },
    ]);
  };

  return (
    <div className="bg-gray-100 ">
      <div className=" mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold underline">CV generator</h1>
        {editingMode === true && (
          <form>
            <div>
              <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                <GeneralInformationForm
                  handleChange={handleChange}
                  state={generalInfo}
                />
              </div>
              <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-2">
                  <h2>Education</h2>
                  {educationInfo.map((section, i) => {
                    return (
                      <EducationInputs
                        key={section.id}
                        deletable={i !== 0}
                        id={section.id}
                        onDeleteSection={deleteEducationSection}
                        handleChange={handleChange}
                        // state={state}
                        getEduValue={getEduValue}
                      />
                    );
                  })}
                  <button
                    type="button"
                    className="p-5  bg-indigo-600 hover:bg-indigo-700 hover:ring-indigo-500 hover:ring-offset-indigo-200 text-white  transition ease-in duration-200  text-xl font-extrabold shadow-md hover:outline-none hover:ring-2 hover:ring-offset-2  rounded-full w-4 h-4 flex items-center justify-center "
                    onClick={(e) => {
                      updateEducationElements();
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
                onClick={() =>
                  setEditingMode(editingMode === true ? false : true)
                }
              />
            </div>
          </form>
        )}
        {editingMode === false && (
          <div>
            <GeneralInformationPreview state={generalInfo} />
            <EducationPreview state={educationInfo} />
            <input
              type="button"
              value="Edit mode"
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() =>
                setEditingMode(editingMode === true ? false : true)
              }
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default CVApplicationForm;
