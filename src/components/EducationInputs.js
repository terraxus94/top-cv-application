import React from 'react';
import Label from './Label';

function EducationInputs(props) {
  const deleteHandler = (id) => {
    props.onDeleteSection(id);
  };

  return (
    <div className="flex flex-row justify-start" id={props.id}>
      <div className="flex flex-col">
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-2 ">
            <Label for={'school' + props.id} labelText={'School:'} />
            <input
              type="text"
              id={'school' + props.id}
              name={'school' + props.id}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={props.getEduValue('school', props.id)}
              placeholder={props.getEduValue('school', props.id)}
              onChange={(e) => {
                props.handleChange(
                  'education',
                  'school',
                  e.target.value,
                  e.target.parentElement.parentElement.parentElement
                    .parentElement.id
                );
              }}
            />
          </div>
        </div>
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-1 ">
            <Label for={'eduStartDate' + props.id} labelText={'From'} />
            <input
              type="date"
              id={'eduStartDate' + props.id}
              name={'eduStartDate' + props.id}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={props.getEduValue('eduStartDate', props.id)}
              placeholder={props.getEduValue('eduStartDate', props.id)}
              onChange={(e) => {
                props.handleChange(
                  'education',
                  'eduStartDate',
                  e.target.value,
                  e.target.parentElement.parentElement.parentElement
                    .parentElement.id
                );
              }}
            />
          </div>
          <div className="col-span-1 ">
            <Label for={'eduEndDate' + props.id} labelText={'To'} />
            <input
              type="date"
              id={'eduEndDate' + props.id}
              name={'eduEndDate' + props.id}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={props.getEduValue('eduEndDate', props.id)}
              placeholder={props.getEduValue('eduEndDate', props.id)}
              onChange={(e) => {
                props.handleChange(
                  'education',
                  'eduEndDate',
                  e.target.value,
                  e.target.parentElement.parentElement.parentElement
                    .parentElement.id
                );
              }}
            />
          </div>
        </div>
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-2 ">
            <Label for={'title' + props.id} labelText={'Title:'} />
            <input
              type="text"
              id={'title' + props.id}
              name={'title' + props.id}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={props.getEduValue('title', props.id)}
              placeholder={props.getEduValue('title', props.id)}
              onChange={(e) => {
                props.handleChange(
                  'education',
                  'title',
                  e.target.value,
                  e.target.parentElement.parentElement.parentElement
                    .parentElement.id
                );
              }}
            />
          </div>
        </div>
      </div>
      {props.deletable && (
        <button
          type="button"
          className="p-5  bg-indigo-600 hover:bg-indigo-700 hover:ring-indigo-500 hover:ring-offset-indigo-200 text-white  transition ease-in duration-200  text-xl font-extrabold shadow-md hover:outline-none hover:ring-2 hover:ring-offset-2  rounded-full w-4 h-4 flex items-center justify-center m-auto"
          onClick={(e) => {
            deleteHandler(e.target.parentElement.id);
          }}
        >
          -
        </button>
      )}
    </div>
  );
}

export default EducationInputs;
