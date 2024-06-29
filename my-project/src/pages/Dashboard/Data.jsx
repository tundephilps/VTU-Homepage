import React from "react";
import Header from "../../components/Dashboard/Header";
import { FaPhone } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import DataPlans from "../../components/Dashboard/DataPlans";
import { Link } from "react-router-dom";

const Data = () => {
  return (
    <div className="p-2">
      <Header />

      <p className="text-2xl font-bold pt-8">Data Subscription</p>
      <p className="text-sm pt-8">Select Network</p>

      <div className="pt-5 flex gap-6 flex-col lg:flex-row">
        <div
          href="#"
          className="bg-[#F7BE02] active:shadow-lg active:shadow-black w-full lg:w-[25%] flex  p-6 items-center justify-center   border border-gray-200 rounded-lg  hover:bg-yellow-800 hover:cursor-pointer "
        >
          <h1 className="text-white text-3xl font-extrabold">MTN</h1>
        </div>
        <div
          href="#"
          className="bg-[#E61A24] active:shadow-lg active:shadow-black w-full lg:w-[25%] flex  p-6 items-center justify-center   border border-gray-200 rounded-lg  hover:bg-red-800 hover:cursor-pointer "
        >
          <h1 className="text-white text-3xl font-extrabold">AIRTEL</h1>
        </div>{" "}
        <div
          href="#"
          className="bg-[#5EBC57] active:shadow-lg active:shadow-black w-full lg:w-[25%] flex  p-6 items-center justify-center   border border-gray-200 rounded-lg  hover:bg-green-800 hover:cursor-pointer "
        >
          <h1 className="text-white text-3xl font-extrabold">GLO</h1>
        </div>
        <div
          href="#"
          className=" bg-gradient-to-r from-[#005C42] to-[#D6E806] active:shadow-lg active:shadow-black w-full lg:w-[25%] flex  p-6 items-center justify-center hover:cursor-pointer  border border-gray-200 rounded-lg  hover:bg-[#1E7E52] "
        >
          <h1 className="text-white text-3xl font-extrabold">9MOBILE</h1>
        </div>
      </div>

      <div className="pt-6">
        <label
          htmlFor="input-group-1"
          className="block mb-2 text-md font-medium text-gray-900 "
        >
          Mobile Number{" "}
          <span className="text-red-500 text-[10px] pl-6">
            Confirm Network Provider
          </span>
        </label>
        <div className="relative mb-6 lg:w-[700px]">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <FaPhone className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            type="text"
            id="input-group-1"
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5  "
            placeholder="+234 000 0000 000"
          />
        </div>
      </div>

      <div className=" flex w-full lg:w-[40%] relative">
        <label htmlFor="underline_select" className="sr-only">
          Underline select
        </label>
        <select
          id="underline_select"
          className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        >
          <option selected>Recent Numbers</option>
          <option value="US">xxxx xxx xxxx</option>
          <option value="CA">xxx xxx xxxxx</option>
          <option value="FR">xxx xxxxx xxxx</option>
        </select>
        <RiArrowDropDownLine className="absolute right-2 top-4" />
      </div>

      <button
        type="button"
        className="mt-6 text-gray-900 bg-white border border-yellow-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        Check data Balance: *460*260#
      </button>

      <div
        className="
          block mb-2 text-md font-medium text-gray-900 pt-6"
      >
        Select Data Plan
      </div>

      <DataPlans />

      <div className="w-full pt-8 block lg:mb-12 mb-32">
        <Link
          to="/PaymentSummaryData"
          className="block text-center w-full px-4 py-3  text-white font-medium bg-gradient-to-r from-[#9C3FE4] to-[#C65647] active:bg-indigo-600 rounded-lg duration-150"
        >
          Buy
        </Link>
      </div>
    </div>
  );
};

export default Data;
