import React from "react";
import { Link } from "react-router-dom";

const Logout = ({ onClose }) => {
  return (
    <div>
      <p>Are you sure you want to log out of Waradata?</p>
      <div className="flex flex-row justify-between pt-6">
        <button
          type="button"
          onClick={onClose}
          className="py-2.5 px-8 me-2 mb-2 text-sm font-medium text-[#C65647] focus:outline-none bg-white rounded-lg border border-[#C65647] hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700"
        >
          Cancel
        </button>

        <Link to="/">
          <button className="active:bg-indigo-600 duration-150 z-50 text-white cursor-pointer bg-gradient-to-r from-[#9C3FE4] to-[#C65647] font-medium rounded-lg text-sm px-8 py-2.5 me-2 mb-2  ">
            Log Out
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Logout;
