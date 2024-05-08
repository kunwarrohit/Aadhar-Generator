import React, { useContext } from "react";
import RightScreen from "../components/MainScreen/RightScreen";
import LeftScreen from "../components/MainScreen/LeftScreen";
import Navbar from "../components/navbar/Navbar";

const MainForm = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row justify-center w-full h-full">
        <LeftScreen />
        <RightScreen />
      </div>
    </>
  );
};

export default MainForm;
