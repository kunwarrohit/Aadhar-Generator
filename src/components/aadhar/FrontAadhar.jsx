import React from "react";

function FrontAadhar({ formDetails }) {
  const { name, dateOfBirth, gender } = formDetails;
  return (
    <div className="flex h-full ">
      <div className="w-1/6 relative">
        <img src="/images/me.png" className="absolute" />
      </div>

      <div className="w-2/3 p-4">
        <p className="">{name}</p>
        <p>जन्म तिथि/DOB : {dateOfBirth}</p>
        <p>{gender}</p>
      </div>
    </div>
  );
}

export default FrontAadhar;
