import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar mb-[2rem]">
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl content-right mx-auto p-4">
          <div class="hidden  w-full md:block md:w-auto" id="navbar-default">
            <Link
              to="/"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 float-right rounded-full"
            >
              {" "}
              Back to Form
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
