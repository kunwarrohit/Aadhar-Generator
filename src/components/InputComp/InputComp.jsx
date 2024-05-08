import React from "react";
import { Field, ErrorMessage } from "formik";

const InputComp = (props) => {
  return (
    <div>
      <div className="mb-6">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {props.label} <span className="text-red-500">*</span>
        </label>

        <Field
          name={props.inputName}
          type={props.type}
          value={props["value"][props.inputName]}
          onChange={props.handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <ErrorMessage
          className="text-red-500"
          name={props.inputName}
          component="div"
        />
      </div>
    </div>
  );
};

// <div class="mb-6">
//     <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default input</label>
//     <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
// </div>
export default InputComp;
