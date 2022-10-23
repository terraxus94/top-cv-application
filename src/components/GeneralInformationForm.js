import React, { Component } from 'react';
import Label from './Label';
import TextInput from './TextInput';
import SelectCountryInput from './SelectCountryInput';

class GeneralInformationForm extends Component {
  render() {
    return (
      <div>
        <h2>General information</h2>
        <form>
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <Label for={'firstname'} labelText={'First name:'} />
              <TextInput id={'firstname'} name={'firstname'} />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <Label for={'lastname'} labelText={'Last name:'} />
              <TextInput id={'lastname'} name={'lastname'} />
            </div>
          </div>
          <div>
            <Label for={'telephonenumber'} labelText={'Telephone number:'} />
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-1 sm:col-span-3">
                {' '}
                {/*we have a problem here, col span 1 not saving*/}
                <input
                  type="number"
                  id="telephoneprefix"
                  name="telephonenumber"
                  placeholder="Country prefix"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div className="col-span-5 sm:col-span-3">
                <input
                  type="number"
                  id="telephonenumber"
                  name="telephonenumber"
                  placeholder="Enter your telephone number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
          <div>
            <Label
              for={'country'}
              labelText={'Country and city of residence:'}
            />
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <SelectCountryInput id="country" name="country" />
              </div>
              <div className="col-span-6 sm:col-span-3">
                {' '}
                <TextInput
                  id={'city'}
                  name={'city'}
                  placeholder={'City of residence'}
                />
              </div>
            </div>
          </div>
          <div>
            <Label for={'photo'} labelText={'Photo:'} />
            <TextInput id={'photo'} name={'photo'} />
          </div>
          <div>
            <Label for={'aboutme'} labelText={'Additional info:'} />
            <TextInput id={'aboutme'} name={'aboutme'} />
          </div>
        </form>
      </div>
    );
  }
}

export default GeneralInformationForm;
