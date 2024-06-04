import React, { useState } from "react";
import logo from "../assets/logo.png";
import { CgMenuRightAlt } from "react-icons/cg";
import { Link } from "react-router-dom";

const NavbarMobile = () => {
  const [state, setState] = useState(false);

  // Replace javascript:void(0) paths with your paths
  const navigation = [
    { title: "Home", path: "#Home" },
    { title: "Contact Us", path: "#ContactUs" },
    { title: "Services", path: "#Services2" },
    { title: "Feedback", path: "#Feedback" },
  ];

  return (
    <div className=" block md:hidden">
      <div className="py-4 w-full px-2  bg-[#0b153c] flex lg:hidden flex-row items-center justify-between">
        <img src={logo} className="h-[52px] mt-3 " />
        <div
          className="bg-[#4c4c4c] p-3 rounded-md mr-4"
          onClick={() => setState(!state)}
        >
          {state ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <CgMenuRightAlt className="text-3xl text-white" />
          )}
        </div>
      </div>
      <div
        className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
          state ? "block" : "hidden"
        }`}
      >
        <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0 px-6">
          {navigation.map((item, idx) => {
            return (
              <li key={idx} className="text-gray-700 hover:text-indigo-600">
                <a
                  href={item.path}
                  className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  {item.title}
                </a>
              </li>
            );
          })}
          <span className="hidden w-px h-6 bg-gray-300 md:block"></span>
          <div className="space-y-3 items-center gap-x-6 md:flex md:space-y-0">
            <li>
              <Link
                to="/Login"
                className="block py-3 text-center text-gray-700 hover:text-indigo-600 border rounded-lg md:border-none"
              >
                Log in
              </Link>
            </li>
            <li>
              <a
                href="#Pricing"
                className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline"
              >
                Data Pricing
              </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavbarMobile;
