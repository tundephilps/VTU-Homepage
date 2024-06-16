import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import React from "react";

const ChangePassword = () => {
  const [isPasswordHidden, setPasswordHidden] = useState(true);

  const [isNewPasswordHidden, setNewPasswordHidden] = useState(true);

  return (
    <>
      <p className="text-xs text-gray-500">
        Confirm Old Password before entering new password
      </p>
      <div className="w-full space-y-6 mt-4">
        <div className="w-full">
          <label className="text-gray-600">Old Password</label>
          <div className="relative mt-2 w-full">
            <button
              className="text-gray-400 absolute right-3 inset-y-0 my-auto active:text-gray-600"
              onClick={() => setPasswordHidden(!isPasswordHidden)}
            >
              {isPasswordHidden ? <FaEye /> : <FaEyeSlash />}
            </button>
            <input
              type={isPasswordHidden ? "password" : "text"}
              placeholder="Enter your password"
              className="w-full pr-12 pl-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
        </div>
        <div>
          <label className="text-gray-600">New Password</label>
          <div className="relative w-full mt-2">
            <button
              className="text-gray-400 absolute right-3 inset-y-0 my-auto active:text-gray-600"
              onClick={() => setNewPasswordHidden(!isNewPasswordHidden)}
            >
              {isNewPasswordHidden ? <FaEye /> : <FaEyeSlash />}
            </button>
            <input
              type={isNewPasswordHidden ? "password" : "text"}
              placeholder="Enter your password"
              className="w-full pr-12 pl-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
        </div>
        <div>
          <label className="text-gray-600">Confirm New Password</label>
          <div className="relative w-full mt-2">
            <button
              className="text-gray-400 absolute right-3 inset-y-0 my-auto active:text-gray-600"
              onClick={() => setNewPasswordHidden(!isNewPasswordHidden)}
            >
              {isNewPasswordHidden ? <FaEye /> : <FaEyeSlash />}
            </button>
            <input
              type={isNewPasswordHidden ? "password" : "text"}
              placeholder="Enter your password"
              className="w-full pr-12 pl-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
        </div>
        <button
          type="submit"
          className="text-white flex lg:w-full bg-gradient-to-r from-[#9C3FE4] to-[#C65647] ocus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mx-auto sm:w-auto px-5 py-2.5 text-center"
        >
          <p className="mx-auto">Change Password</p>
        </button>
      </div>
    </>
  );
};

export default ChangePassword;
