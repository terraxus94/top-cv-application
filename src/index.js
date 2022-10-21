import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CVApplicationForm from './components/CVApplicationForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CVApplicationForm />
  </React.StrictMode>
);

// General information
//   first name
//   last name
//   email
//   city and country of residence
//   phone number
//   about section
//   photo
// Education
//   school name
//   study title
//   start end of study
// Practical experience
//   company name
//   position title
//   responsibilities
//   start and end Date
//   additional info

// Additional
// Be sure to include an edit and submit button for each section or for the whole CV, your preference. The submit button should submit your form and display the value of your input fields in HTML elements. The edit button should add back (display) the input fields, with the previously displayed information as values. In those input fields, you should be able to edit and resubmit the content. You’re going to make heavy use of state and props, so make sure you understood those concepts.
