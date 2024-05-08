// DisplayFormData.js
import React from "react";

const DisplayFormData = ({ formData }) => {
  // Use formData to display or process the data
  return (
    <div>
      <h2>Form Data</h2>
      <p>Name: {formData.name}</p>
      <p>Father's Name: {formData.fatherName}</p>
      <p>Date of Birth: {formData.dob}</p>
      <p>Address: {formData.address}</p>
      <p>Gender: {formData.gender}</p>
    </div>
  );
};

export default DisplayFormData;
