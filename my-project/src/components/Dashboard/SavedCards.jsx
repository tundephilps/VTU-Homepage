import React from "react";
import { FaTimes, FaCheck, FaCreditCard } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

const SavedCards = ({ onClose }) => {
  return (
    <div className="p-4 mt-6 bg-gray-100 rounded-lg shadow-md relative">
      <button
        className="absolute top-0 right-2 text-gray-600 hover:text-gray-800"
        onClick={onClose}
      >
        <FaTimes className="text-2xl" />
      </button>
      <div className="flex flex-row items-center justify-between border-b-2 border-gray-400 py-3">
        <div className="flex flex-row items-center gap-8">
          <FaCheck />
          <FaCreditCard className="text-3xl text-[#545454]" />
          <p className="text-2xl">*** 2979</p>
        </div>
        <IoIosCloseCircle className="text-3xl text-[#545454]" />
      </div>
      <div className="flex flex-row items-center justify-between border-b-2 border-gray-400 py-3">
        <div className="flex flex-row items-center gap-8">
          <FaCheck className="opacity-0" />
          <FaCreditCard className="text-3xl text-[#545454]" />
          <p className="text-2xl">*** 4579</p>
        </div>
        <IoIosCloseCircle className="text-3xl text-[#545454]" />
      </div>
    </div>
  );
};

export default SavedCards;
