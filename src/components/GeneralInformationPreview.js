import React, { Component } from 'react';

class GeneralInformationPreview extends Component {
  changeMode = (e) => {
    console.log(e.target.previousElementSibling);
  };
  render() {
    const previewData = this.props.state.formData.generalInfo;
    return (
      <div className="flex flex-col gap-2">
        <div className="flex preview-container">
          <p id="firstname">{previewData.firstName}</p>
          <input
            type="button"
            value="Edit mode"
            className="local-edit hidden justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={(e) => this.changeMode(e)}
          />
        </div>
        <p>{previewData.lastName}</p>
        <p>
          Tel: +{previewData.telPrefix} {previewData.telNumber}
        </p>
        <p>
          Based in {previewData.city}, {previewData.country}
        </p>
        <p>{previewData.additionalInfo}</p>
      </div>
    );
  }
}

export default GeneralInformationPreview;

// preview mode
// on element hover show edit/preview button
// onclick on button change the preview element to input
// if the input is updated the state should update
// when returning to preview mode for that input the value should be updated
// if the global edit mode is clicked all preview changes to edit
