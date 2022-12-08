import React, { Component } from 'react';

class EducationPreview extends Component {
  render() {
    const previewData = this.props.state.formData.education;
    return (
      <div className="flex flex-col gap-2">
        <h2>Education</h2>
        {previewData.map((element) => {
          const startDate = new Date(element.startDate)
            .toDateString()
            .split(' ')
            .slice(1)
            .join()
            .replace(',', ' ');

          const endDate = new Date(element.endDate)
            .toDateString()
            .split(' ')
            .slice(1)
            .join()
            .replace(',', ' ');

          return (
            <div key={element.id} id={element.id}>
              <p>Attended {element.school}</p>
              <p>
                From {startDate} to {endDate}
              </p>
              <p>Graduated with the title of {element.title}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default EducationPreview;
