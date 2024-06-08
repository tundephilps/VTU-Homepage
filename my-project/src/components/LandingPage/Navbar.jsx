import React from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font bg-[#0b153c] hidden md:flex !scroll-smooth ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex items-center text-gray-900  md:mb-0">
          <img src={logo} className="h-[52px]" />
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a
            className="mr-5 hover:text-gray-100 cursor-pointer relative"
            href="#Homepage"
          >
            Home
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-2 h-2 hover:bg-blue-400 rounded-full bg-none "></span>
          </a>
          <a
            href="#ContactUs"
            className="mr-5 hover:text-gray-100 cursor-pointer relative"
          >
            Contact Us
            <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-2 h-2 hover:bg-blue-400 rounded-full bg-none "></div>
          </a>
          <a
            href="#Services"
            className="mr-5 hover:text-gray-100 cursor-pointer relative"
          >
            Services
            <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-2 h-2 hover:bg-blue-400 rounded-full bg-none "></div>{" "}
          </a>
          <a
            href="#Feedback"
            className="mr-5 hover:text-gray-100 cursor-pointer relative"
          >
            Feedback
            <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-2 h-2 hover:bg-blue-400 rounded-full bg-none "></div>
          </a>
        </nav>
        <a
          href="#Pricing"
          className="inline-flex items-center bg-[#424242] border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded-lg
         text-base mt-4 md:mt-0 cursor-pointer"
        >
          <h1 className="text-[#2A71ff] font-extrabold">Data Pricing</h1>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
