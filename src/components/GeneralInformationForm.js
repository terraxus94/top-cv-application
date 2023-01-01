import React from 'react';
import Label from './Label';
import TextInput from './TextInput';
import SelectCountryInput from './SelectCountryInput';

function GeneralInformationForm(props) {
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
            value={props.state.firstName}
            placeholder={props.state.firstName}
            required
            onChange={(e) => {
              props.handleChange('generalInfo', 'firstName', e.target.value);
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
            value={props.state.lastName}
            placeholder={props.state.lastName}
            onChange={(e) => {
              props.handleChange('generalInfo', 'lastName', e.target.value);
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
              placeholder={props.state.telPrefix || 'Country prefix'}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={props.state.telPrefix}
              onChange={(e) => {
                props.handleChange('generalInfo', 'telPrefix', e.target.value);
              }}
            />
          </div>
          <div className="col-span-2">
            <input
              type="text"
              id="telNumber"
              name="telNumber"
              placeholder={props.state.telNumber || 'Telephone number'}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={props.state.telNumber}
              onChange={(e) => {
                props.handleChange('generalInfo', 'telNumber', e.target.value);
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
              handleChange={props.handleChange}
              state={props.state}
            />
          </div>
          <div className="col-span-2 ">
            <input
              type="text"
              id="city"
              name="city"
              placeholder={props.state.city || 'City of residence'}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={props.city}
              onChange={(e) => {
                props.handleChange('generalInfo', 'city', e.target.value);
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
            value={props.state.additionalInfo}
            placeholder={props.state.additionalInfo}
            onChange={(e) => {
              props.handleChange(
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

export default GeneralInformationForm;
