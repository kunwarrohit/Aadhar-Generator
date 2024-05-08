import React from "react";

const BackAadhar = ({ formDetails }) => {
  const { fatherName, address } = formDetails;
  return (
    <div>
      <div className=" ml-10 w-1/2  grid justify-items-start">
        <p>S/O : {fatherName}</p>
        <p>Address:</p>
        <p>{address}</p>
      </div>
    </div>
  );
};

export default BackAadhar;
