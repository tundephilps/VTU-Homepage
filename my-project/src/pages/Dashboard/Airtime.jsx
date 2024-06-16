import Header from "../../components/Dashboard/Header";
import { FaPhone } from "react-icons/fa";
import MTN from "../../assets/MTN.png";
import GLO from "../../assets/GLO.png";
import AIRTEL from "../../assets/AIRTEL.png";
import ETI from "../../assets/ETI.png";
import React, { useState } from "react";
import { RiArrowDropDownFill } from "react-icons/ri";

const Airtime = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelect = (item) => {
    setSelectedItem(item);
    setShowDropdown(false);
  };

  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="p-2">
      <Header />
      <p className="text-2xl font-bold pt-8">Purchase Airtime</p>

      <div className="bg-gray-100 p-6 mt-8">
        <div className="lg:flex flex-col lg:flex-row  items-center justify-between w-full">
          <div>
            <label
              for="input-group-1"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Mobile Number
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

          <div className="pb-7">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Choose Network
            </label>
            <div
              onClick={handleToggleDropdown}
              className="bg-white p-2 lg:w-[190px] flex flex-row items-center relative rounded-md"
            >
              <input
                type="text"
                className="outline-none"
                value={selectedItem}
                readOnly
              />
              <button className="absolute right-0 px-6">
                <RiArrowDropDownFill />
              </button>
            </div>
            {showDropdown && (
              <div className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="states-button"
                >
                  <li>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => handleSelect("MTN")}
                    >
                      <div className="inline-flex items-center">
                        <img src={MTN} className="h-4 w-4 mr-2" />
                        MTN
                      </div>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => handleSelect("GLO")}
                    >
                      <div className="inline-flex items-center">
                        <img src={GLO} className="h-4 w-4 mr-2" />
                        GLO
                      </div>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => handleSelect("AIRTEL")}
                    >
                      <div className="inline-flex items-center">
                        <img src={AIRTEL} className="h-4 w-4 mr-2" />
                        AIRTEL
                      </div>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => handleSelect("9MOBILE")}
                    >
                      <div className="inline-flex items-center">
                        <img src={ETI} className="h-4 w-4 mr-2" />
                        9MOBILE
                      </div>
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div>
          <h1>Select Price</h1>
          <div className="lg:flex lg:flex-wrap  lg:gap-[55px] lg:space-y-0 space-y-3 pt-8">
            <div
              className="flex flex-col hover:cursor-pointer items-center
             gap-2 py-4 px-20 shadow-lg bg-white rounded-md"
            >
              <h1>N100</h1>
              <p className="text-[#f60000] text-xs">2% Cashback</p>
            </div>
            <div
              className="flex flex-col hover:cursor-pointer items-center
             gap-2 py-4 px-20 shadow-lg bg-white rounded-md"
            >
              <h1>N200</h1>
              <p className="text-[#f60000] text-xs">2% Cashback</p>
            </div>{" "}
            <div
              className="flex flex-col hover:cursor-pointer items-center
             gap-2 py-4 px-20 shadow-lg bg-white rounded-md"
            >
              <h1>N500</h1>
              <p className="text-[#f60000] text-xs">2% Cashback</p>
            </div>{" "}
            <div
              className="flex flex-col hover:cursor-pointer items-center
             gap-2 py-4 px-20 shadow-lg bg-white rounded-md"
            >
              <h1>N1000</h1>
              <p className="text-[#f60000] text-xs">2% Cashback</p>
            </div>
            <div
              className="flex flex-col hover:cursor-pointer items-center
             gap-2 py-4 px-20 shadow-lg bg-white rounded-md"
            >
              <h1>N2000</h1>
              <p className="text-[#f60000] text-xs">2% Cashback</p>
            </div>{" "}
            <div
              className="flex flex-col hover:cursor-pointer items-center
             gap-2 py-4 px-20 shadow-lg bg-white rounded-md"
            >
              <h1>N5000</h1>
              <p className="text-[#f60000] text-xs">2% Cashback</p>
            </div>
          </div>
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
              for="floating-phone-number"
              className="text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              ₦50 - ₦50,000
            </label>
          </div>
          <button className=" w-[30%] px-4 py-3  text-white font-medium bg-gradient-to-r from-[#9C3FE4] to-[#C65647] active:bg-indigo-600 rounded-lg duration-150">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Airtime;
