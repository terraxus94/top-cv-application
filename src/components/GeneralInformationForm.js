import React, { Component } from 'react';
import Label from './Label';
import TextInput from './TextInput';
import SelectCountryInput from './SelectCountryInput';

class GeneralInformationForm extends Component {
  render() {
    return (
      <div>
        <h2>General information</h2>
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-2 ">
            <Label for={'firstName'} labelText={'First name:'} />
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={this.props.state.formData.generalInfo.firstName}
              placeholder={this.props.state.formData.generalInfo.firstName}
              required
              onChange={(e) => {
                this.props.handleChange(
                  'generalInfo',
                  'firstName',
                  e.target.value
                );
              }}
            />
          </div>
          <div className="col-span-2 ">
            <Label for={'lastName'} labelText={'Last name:'} />
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={this.props.state.formData.generalInfo.lastName}
              placeholder={this.props.state.formData.generalInfo.lastName}
              onChange={(e) => {
                this.props.handleChange(
                  'generalInfo',
                  'lastName',
                  e.target.value
                );
              }}
            />
          </div>
        </div>
        <div>
          <Label for={'telNumber'} labelText={'Telephone number:'} />
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-1">
              <input
                type="text"
                id="telPrefix"
                name="telPrefix"
                placeholder={
                  this.props.state.formData.generalInfo.telPrefix ||
                  'Country prefix'
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={this.props.state.formData.generalInfo.telPrefix}
                onChange={(e) => {
                  this.props.handleChange(
                    'generalInfo',
                    'telPrefix',
                    e.target.value
                  );
                }}
              />
            </div>
            <div className="col-span-2">
              <input
                type="text"
                id="telNumber"
                name="telNumber"
                placeholder={
                  this.props.state.formData.generalInfo.telNumber ||
                  'Telephone number'
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={this.props.state.formData.generalInfo.telNumber}
                onChange={(e) => {
                  this.props.handleChange(
                    'generalInfo',
                    'telNumber',
                    e.target.value
                  );
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <Label for={'country'} labelText={'Country and city of residence:'} />
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-2 ">
              <SelectCountryInput
                id="country"
                name="country"
                handleChange={this.props.handleChange}
                state={this.props.state}
              />
            </div>
            <div className="col-span-2 ">
              <input
                type="text"
                id="city"
                name="city"
                placeholder={
                  this.props.state.formData.generalInfo.city ||
                  'City of residence'
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={this.props.state.formData.generalInfo.city}
                onChange={(e) => {
                  this.props.handleChange(
                    'generalInfo',
                    'city',
                    e.target.value
                  );
                }}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-2 ">
            <Label for={'photo'} labelText={'Photo:'} />
            <TextInput
              id={'photo'}
              name={'photo'}
              placeholder={'this is illegal'}
              disabled={'disabled'}
            />
          </div>
        </div>
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-4 ">
            <Label for={'additionalInfo'} labelText={'Additional info:'} />
            <input
              type="text"
              id="additionalInfo"
              name="additionalInfo"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={this.props.state.formData.generalInfo.additionalInfo}
              placeholder={this.props.state.formData.generalInfo.additionalInfo}
              onChange={(e) => {
                this.props.handleChange(
                  'generalInfo',
                  'additionalInfo',
                  e.target.value
                );
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default GeneralInformationForm;
