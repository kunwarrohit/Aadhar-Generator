import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import MainForm from "./MainForm";
import FormDataContext from "../components/FormDataContext/FormDataContext";
const AdhaarGenerator = () => {
  const [formDetails, setFormDetails] = useState({
    name: "",
    fatherName: "",
    address: "",
    phoneNumber: "",
    dateOfBirth: "",
    gender: "",
    uuid: "",
  });
  return (
    <div>
      <FormDataContext.Provider value={[formDetails, setFormDetails]}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/adhaar" element={<MainForm />} />
        </Routes>
      </FormDataContext.Provider>
    </div>
  );
};

export default AdhaarGenerator;
