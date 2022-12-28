import React, { Component } from 'react';
import Label from './Label';

class EducationInputs extends Component {
  deleteHandler = (id) => {
    this.props.onDeleteSection(id);
  };

  render() {
    return (
      <div className="flex flex-row justify-start" id={this.props.id}>
        <div className="flex flex-col">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-2 ">
              <Label for={'school' + this.props.id} labelText={'School:'} />
              <input
                type="text"
                id={'school' + this.props.id}
                name={'school' + this.props.id}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={this.props.getEduValue('school', this.props.id)}
                placeholder={this.props.getEduValue('school', this.props.id)}
                onChange={(e) => {
                  this.props.handleChange(
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
              <Label for={'eduStartDate' + this.props.id} labelText={'From'} />
              <input
                type="date"
                id={'eduStartDate' + this.props.id}
                name={'eduStartDate' + this.props.id}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={this.props.getEduValue('eduStartDate', this.props.id)}
                placeholder={this.props.getEduValue(
                  'eduStartDate',
                  this.props.id
                )}
                onChange={(e) => {
                  this.props.handleChange(
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
              <Label for={'eduEndDate' + this.props.id} labelText={'To'} />
              <input
                type="date"
                id={'eduEndDate' + this.props.id}
                name={'eduEndDate' + this.props.id}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={this.props.getEduValue('eduEndDate', this.props.id)}
                placeholder={this.props.getEduValue(
                  'eduEndDate',
                  this.props.id
                )}
                onChange={(e) => {
                  this.props.handleChange(
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
              <Label for={'title' + this.props.id} labelText={'Title:'} />
              <input
                type="text"
                id={'title' + this.props.id}
                name={'title' + this.props.id}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={this.props.getEduValue('title', this.props.id)}
                placeholder={this.props.getEduValue('title', this.props.id)}
                onChange={(e) => {
                  this.props.handleChange(
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
        {this.props.deletable && (
          <button
            type="button"
            className="p-5  bg-indigo-600 hover:bg-indigo-700 hover:ring-indigo-500 hover:ring-offset-indigo-200 text-white  transition ease-in duration-200  text-xl font-extrabold shadow-md hover:outline-none hover:ring-2 hover:ring-offset-2  rounded-full w-4 h-4 flex items-center justify-center m-auto"
            onClick={(e) => {
              this.deleteHandler(e.target.parentElement.id);
            }}
          >
            -
          </button>
        )}
      </div>
    );
  }
}

export default EducationInputs;
