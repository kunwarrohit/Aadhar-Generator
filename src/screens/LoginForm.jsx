import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import formFields from "../lib/formFields.json";
import InputComp from "../components/InputComp/InputComp";
import SelectComp from "../components/SelectComp/SelectComp";
import FormDataContext from "../components/FormDataContext/FormDataContext";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  fatherName: Yup.string().required("Father's name is required"),
  address: Yup.string().required("Address is required"),
  phoneNumber: Yup.number().required("Phone number is required"),
  dateOfBirth: Yup.date().required("Date of birth is required"),
  gender: Yup.string().required("Gender is required"),
});

const generateRandomAadharId = () => {
  const min = 100000000000;
  const max = 999999999999;
  const randomId = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomId;
};

const LoginForm = () => {
  const [formDetails, setFormDetails] = useContext(FormDataContext);
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    values.uuid = generateRandomAadharId();
    setFormDetails(values);
    console.log("Form submitted:", values);
    navigate("/adhaar");
  };
  return (
    <div className="container w-full lg:w-1/2 flex content-center mx-auto">
      <div className="bg-gradient-to-b from-amber-500 via-white to-emerald-700 p-8 rounded-lg shadow-md w-full mt-[80px]">
        <h2 className="text-2xl font-bold mb-4 text-center">Create Aadhar</h2>
        <Formik
          initialValues={formDetails}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, onSubmit, values, handleChange }) => (
            <Form>
              <div class="grid gap-6 mb-6 md:grid-cols-2">
                {Object.keys(formFields).map((field, id) => {
                  if (field === "input") {
                    return formFields[field].map((item, id) => {
                      return (
                        <InputComp
                          key={id}
                          label={item.label}
                          type={item.type}
                          inputName={item.inputName}
                          value={values}
                          handleChange={handleChange}
                          errors={errors}
                        />
                      );
                    });
                  } else if (field === "select") {
                    return formFields[field].map((item, id) => {
                      return (
                        <SelectComp
                          key={id}
                          label={item.label}
                          selectName={item.selectName}
                          options={item.options}
                          value={values}
                          handleChange={handleChange}
                          errors={errors}
                        />
                      );
                    });
                  }
                })}
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default LoginForm;
