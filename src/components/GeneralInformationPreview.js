import React from 'react';

function GeneralInformationPreview(props) {
  const previewData = props.state;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex preview-container">
        <p id="firstname">{previewData.firstName}</p>
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

export default GeneralInformationPreview;
