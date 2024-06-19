import React from "react";
import Header from "../../components/Dashboard/Header";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Electricity = () => {
  return (
    <div className="p-2">
      <Header />
      <p className="text-2xl font-bold pt-8">Electricity Subscription</p>

      <div className="bg-gray-100 p-6 mt-8">
        <p className="text-sm pb-6">Select Electricity Type</p>
        <div className="flex flex-wrap gap-12">
          <div className="bg-gradient-to-r from-[#9C3FE4] hover:cursor-pointer shadow-lg shadow-black to-[#C65647] p-12 rounded-lg">
            <h1 className="text-white text-3xl font-extrabold">Prepaid</h1>
          </div>
          <div className="bg-gradient-to-r from-[#9C3FE4] hover:cursor-pointer active:shadow-lg active:shadow-black to-[#C65647] p-12 rounded-lg">
            <h1 className="text-white text-3xl font-extrabold">Postpaid</h1>
          </div>
        </div>
        <div className=" pt-6">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select Provider
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose a Provider</option>
            <option value="US">Ibadan Electricity</option>

            <option value="US">Jos Electricity</option>

            <option value="US">Kaduna Electricity</option>
            <option value="US">Ikeja Disco</option>
            <option value="US">Abuja Electricity</option>
            <option value="CA">PortHarcout Electricity</option>
            <option value="US">Eko Electricity</option>
            <option value="US">Enugu Electricity</option>
            <option value="US">Kano Electricity</option>
            <option value="US">Benin Electricity</option>
            <option value="US">YEDC</option>
          </select>
        </div>

        <div className="pt-4">
          <label
            htmlFor="number-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Meter Number:
          </label>
          <input
            type="number"
            id="number-input"
            aria-describedby="helper-text-explanation"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="0258000353737"
            required
          />
        </div>

        <div className=" flex w-full lg:w-[40%] relative mt-4">
          <label htmlFor="underline_select" className="sr-only">
            Underline select
          </label>
          <select
            id="underline_select"
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            <option defaultValue>Recent Meter Numbers</option>
            <option value="US">xxxx xxx xxxx</option>
            <option value="CA">xxx xxx xxxxx</option>
            <option value="FR">xxx xxxxx xxxx</option>
          </select>
          <RiArrowDropDownLine className="absolute right-2 top-4" />
        </div>

        <h1 className="pt-6">Select Cable Plan</h1>
        <div className="flex flex-wrap gap-6">
          <button
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm h-24 lg:w-56 w-36  me-2 mb-2 dark:hover:bg-gray-700"
          >
            <p className="text-3xl text-black font-extrabold">N1000</p>
          </button>
          <button
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm h-24 lg:w-56 w-36 me-2 mb-2 dark:hover:bg-gray-700"
          >
            <p className="text-3xl text-black font-extrabold">N2000</p>
          </button>
          <button
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm h-24 lg:w-56 w-36 me-2 mb-2 dark:hover:bg-gray-700"
          >
            <p className="text-3xl text-black font-extrabold">N3000</p>
          </button>{" "}
          <button
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm h-24 lg:w-56 w-36 me-2 mb-2 dark:hover:bg-gray-700"
          >
            <p className="text-3xl text-black font-extrabold">N5000</p>
          </button>{" "}
          <button
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm h-24 lg:w-56 w-36 me-2 mb-2 dark:hover:bg-gray-700"
          >
            <p className="text-3xl text-black font-extrabold">N10000</p>
          </button>
          <button
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm h-24 lg:w-56 w-36 me-2 mb-2 dark:hover:bg-gray-700"
          >
            <p className="text-3xl text-black font-extrabold">N15000</p>
          </button>
        </div>
        <div className="flex lg:flex-row items-center gap-12">
          <div className="relative pt-8 w-[70%]   ">
            <span className="absolute start-0 bottom-6 text-gray-500 dark:text-gray-400">
              <h1 className="text-3xl"> ₦</h1>
            </span>
            <input
              type="text"
              id="floating-phone-number"
              className="block py-1 ps-8 pe-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="Enter Amount"
            />
            <label
              htmlFor="floating-phone-number"
              className="text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              ₦50 - ₦50,000
            </label>
          </div>
          <Link
            to="/PaymentSummaryElectricity"
            className=" w-[30%] px-4 py-3  text-white font-medium bg-gradient-to-r from-[#9C3FE4] to-[#C65647] active:bg-indigo-600 rounded-lg duration-150"
          >
            Buy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Electricity;
