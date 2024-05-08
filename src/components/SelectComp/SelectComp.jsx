import React from "react";
import { Field, ErrorMessage } from "formik";
const SelectComp = (props) => {
  return (
    <div>
      <div className="mb-6">
        <label
          htmlFor="gender"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {props.label} <span className="text-red-500">*</span>
        </label>
        <Field
          name="gender"
          as="select"
          value={props["value"][props.selectName]}
          onChange={props.handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">Select Gender</option>]{" "}
          {props.options.map((item, id) => {
            return <option key={id}>{item}</option>;
          })}{" "}
        </Field>
        <ErrorMessage
          className="text-red-500"
          name={props.selectName}
          component="div"
        />
      </div>
    </div>
  );
};

export default SelectComp;
