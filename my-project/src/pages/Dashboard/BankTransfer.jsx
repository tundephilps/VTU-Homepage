import React, { useState } from "react";
import Header from "../../components/Dashboard/Header";
import { Link } from "react-router-dom";
import Test1 from "../../assets/Test1.png";

import Check from "../../assets/check.png";
import NA from "../../assets/NA.jpg";
import FavouritesTab from "../../components/Dashboard/FavouritesTab";
import SingleSelectDropdown from "../../components/Dashboard/SingleSelectDropdown";

const BankTransfer = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    "UBA",
    "Zenith Bank",
    "Fidelity Bank",
    "First Bank",
    "AB Microfinance Bank",
    "AG Mortgage Bank",
    "Access Bank",
  ];

  const TransferType = [
    {
      label: "WaraData",
      content: (
        <div>
          <div className="pt-8">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Recipient's Email:
            </label>
            <input
              type="email"
              id="email"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="johnsmith1@gmail.com"
              required
              autoComplete="off"
            />
          </div>
          <div className="flex flex-row items-center pt-4 gap-3">
            <img
              className="w-8 h-8 rounded-full"
              src={Test1}
              alt="user photo"
            />
            <p>Fagorusi Jeremiah</p>
          </div>
          <div className="h-6" />
          <Link
            to="/WalletTransfer"
            className=" text-center flex lg:w-[250px] w-full   py-3   text-white font-medium bg-gradient-to-r from-[#9C3FE4] to-[#C65647] active:bg-indigo-600 rounded-lg duration-150"
          >
            <p className="text-center mx-auto flex">Verify</p>
          </Link>
          {/* Tabs */}
          <FavouritesTab />
        </div>
      ),
    },
    {
      label: "Others",
      content: (
        <div>
          <div className="pt-8">
            <label
              htmlFor="Number"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Recipient's Account:
            </label>
            <input
              type="number"
              id="Number"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Kindly Enter 10 Digit Account Number"
              required
              autoComplete="off"
            />
          </div>

          <div className="pt-4">
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select Bank
            </label>
            <SingleSelectDropdown
              options={options}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
            <div className="mt-4 flex items-center gap-4">
              <strong>Selected Bank:</strong>
              <p>{selectedOption}</p>
            </div>
          </div>

          <div className="flex flex-row items-center pt-4 gap-3">
            <img
              className="w-8 h-8 rounded-full"
              src={Check}
              alt="user photo"
            />
            <p>Fagorusi Jeremiah</p>
          </div>
          <div className="h-6" />
          <Link
            to="/WalletTransfer"
            className=" text-center flex lg:w-[250px] w-full   py-3   text-white font-medium bg-gradient-to-r from-[#9C3FE4] to-[#C65647] active:bg-indigo-600 rounded-lg duration-150"
          >
            <p className="text-center mx-auto flex">Verify</p>
          </Link>
          {/* Tabs */}
          <FavouritesTab />
        </div>
      ),
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="p-2">
      <Header />
      <p className="text-2xl font-bold pt-8">Bank Transfer</p>

      <div className="bg-gray-100 p-6 mt-8 lg;mb-0 mb-36">
        <div className="flex flex-wrap gap-12">
          {TransferType.map((tab, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(index)}
              className={`bg-gradient-to-r from-[#9C3FE4] hover:cursor-pointer shadow-lg  to-[#C65647] p-12 lg:w-[20%] w-full rounded-lg ${
                activeTab === index ? "shadow-black" : ""
              }`}
            >
              <h1 className="text-white text-3xl font-extrabold text-center">
                {" "}
                {tab.label}
              </h1>
            </div>
          ))}
        </div>

        <div className="py-3 ">{TransferType[activeTab].content}</div>
      </div>
    </div>
  );
};

export default BankTransfer;
