import React from "react";
import Header from "../../components/Dashboard/Header";
import dstv from "../../assets/dstv.png";
import { Link } from "react-router-dom";
import gotv from "../../assets/gotv.png";
import startimes from "../../assets/startimes.png";

const TVSubscription = () => {
  return (
    <div className="p-2">
      <Header />
      <p className="text-2xl font-bold pt-8 ">Cable Subscriptions</p>

      <div className="bg-gray-100 lg:p-6 p-2 mt-8">
        <p className="text-sm pb-8">Select Cable Name</p>

        <div className="flex flex-wrap lg:gap-12 gap-6">
          <img src={startimes} className="w-[183px] h-[119px]" />

          <img src={dstv} className="w-[183px] h-[119px]" />
          <img src={gotv} className="w-[183px] h-[119px]" />
        </div>
        <div className="pt-6">
          <label
            htmlFor="number-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Smart Card Number/ IUC Number:
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

        <div>
          <h1 className="pt-6">Select Cable Plan</h1>
          <div className="flex flex-wrap gap-6">
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm h-24 lg:w-56 w-36  me-2 mb-2 dark:hover:bg-gray-700"
            >
              <p>Gotv Smile Monthly</p>
              <p className="text-3xl text-black font-extrabold">N1000</p>
            </button>
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm h-24 lg:w-56 w-36 me-2 mb-2 dark:hover:bg-gray-700"
            >
              <p>Gotv Ginja Monthly</p>
              <p className="text-3xl text-black font-extrabold">N2000</p>
            </button>
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm h-24 lg:w-56 w-36 me-2 mb-2 dark:hover:bg-gray-700"
            >
              <p>Gotv Ginja Monthly</p>
              <p className="text-3xl text-black font-extrabold">N3000</p>
            </button>{" "}
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm h-24 lg:w-56 w-36 me-2 mb-2 dark:hover:bg-gray-700"
            >
              <p>Gotv Ginja Monthly</p>
              <p className="text-3xl text-black font-extrabold">N5000</p>
            </button>{" "}
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm h-24 lg:w-56 w-36 me-2 mb-2 dark:hover:bg-gray-700"
            >
              <p>Gotv Ginja Monthly</p>
              <p className="text-3xl text-black font-extrabold">N10000</p>
            </button>
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm h-24 lg:w-56 w-36 me-2 mb-2 dark:hover:bg-gray-700"
            >
              <p>Gotv Ginja Monthly</p>
              <p className="text-3xl text-black font-extrabold">N15000</p>
            </button>
          </div>
        </div>
        <div className="w-full pt-8 block">
          <Link
            to="/PaymentSummaryTVSub"
            className=" lg:mb-0 mb-32 block text-center w-full px-4 py-3  text-white font-medium bg-gradient-to-r from-[#9C3FE4] to-[#C65647] active:bg-indigo-600 rounded-lg duration-150"
          >
            Buy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TVSubscription;
