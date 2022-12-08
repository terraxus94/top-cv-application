import React, { Component } from 'react';

class GeneralInformationPreview extends Component {
  render() {
    const previewData = this.props.state.formData.generalInfo;
    return (
      <div className="flex flex-col gap-2">
        <h2>
          {previewData.firstName} {previewData.lastName}
        </h2>
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
