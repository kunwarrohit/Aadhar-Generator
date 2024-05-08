import React, { useContext } from "react";
import imageData from "../../lib/imageData.json";
import FrontAadhar from "../aadhar/FrontAadhar";
import BackAadhar from "../aadhar/BackAadhar";
import FormDataContext from "../FormDataContext/FormDataContext";
const Common = (props) => {
  const [formDetails, setFormDetails] = useContext(FormDataContext);
  const uuid = formDetails["uuid"]?.toString() || "894578452654";
  return (
    <div className="w-full">
      <div className=" m-10 h-80 w-80% border-2 border-grey-500/100 relative ">
        <div className="flex justify-between w-full border-2 border-grey-500/100 h-1/3">
          {Object.keys(imageData).map((images, id) => {
            return imageData[images].map((eachImage, uid) => {
              return (
                <div>
                  <img
                    src={`/images/${eachImage["name"]}`}
                    alt={eachImage.alt}
                  />
                </div>
              );
            });
          })}
        </div>

        <div className="w-full h-2/3  relative">
          {props.frontInfo ? (
            <FrontAadhar formDetails={formDetails} />
          ) : (
            <BackAadhar formDetails={formDetails} />
          )}
          <div className="bottom-0 absolute grid justify-items-center w-full">
            <h1>{uuid.replace(/(\d{4})(?=\d)/g, "$1 ")}</h1>

            <h2 className="mt-2">मेरा आधार मेरी पहचान</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Common;
