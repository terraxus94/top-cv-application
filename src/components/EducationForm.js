import React, { Component } from 'react';

class EducationForm extends Component {
  render() {
    return (
      <div>
        <h2>Education</h2>
        <form>
          <label htmlFor="school">School:</label>
          <input type="text" id="school" name="school" /> <br />
          <label htmlFor="time">From to time</label>
          <input type="text" id="time" name="time" /> <br />
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" /> <br />
        </form>
      </div>
    );
  }
}

export default EducationForm;
