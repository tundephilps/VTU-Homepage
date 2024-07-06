import React, { useState } from "react";
import Header from "../../components/Dashboard/Header";
import card from "../../assets/card.png";
import { FaEye, FaEyeSlash, FaWallet } from "react-icons/fa";
import Data from "../../assets/Data.png";

import Savings from "../../assets/Savings.png";
import airtime from "../../assets/airtime.png";

import Bank from "../../assets/Bank.png";
import Sub from "../../assets/Sub.png";
import Electricity from "../../assets/Electricity.png";
import Adverts from "../../components/Dashboard/Adverts";
import ChartJsExample from "../../components/Dashboard/ChartsTable";
import { Link } from "react-router-dom";
//import ChartsTable from "../../components/Dashboard/ChartsTable";

const Dashboard = () => {
  const [isAmountVisible, setIsAmountVisible] = useState(false);

  const toggleVisibility = () => {
    setIsAmountVisible(!isAmountVisible);
  };

  return (
    <div className="p-2 block overflow-x-hidden">
      <Header />
      <h1 className="text-2xl font-bold pt-8">Welcome Fagorusi</h1>
      {/* Grid */}
      <div className="grid lg:grid-cols-2 grid-col-1 lg:gap-8 gap-y-14 lg:py-6  ">
        {/* Credit Card */}
        <div className="relative lg:h-[250px] h-[100%] w-[96%]">
          <img
            src={card}
            className="absolute inset-[0%]  inline-block h-[250px] lg:w-full"
            alt=""
          />
          <button
            onClick={toggleVisibility}
            className="absolute bottom-[30%] right-[14%] cursor-pointer z-50"
          >
            {isAmountVisible ? (
              <FaEye className="text-3xl text-white" />
            ) : (
              <FaEyeSlash className="text-3xl text-white" />
            )}
          </button>

          <div className="mx-auto relative flex flex-row justify-between p-6 w-full">
            <div>
              <p className="text-white lg:text-2xl text-lg pt-[120px] font-bold font-serif">
                {isAmountVisible ? "N1,800,000" : "*************"}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Link
                to="/fundWallet"
                className="bg-white px-3 py-1 w-[140px] rounded-md flex flex-row items-center gap-2"
              >
                <div className="bg-gradient-to-r from-pink-200 to-blue-200  rounded-full p-2 ">
                  <FaWallet className="text-white" />
                </div>
                <p className="text-xs">Fund Wallet</p>
              </Link>
              <Link
                to="/transactions"
                className="bg-white px-3 py-1 w-[140px] rounded-md flex flex-row items-center gap-2"
              >
                <div className="bg-gradient-to-r from-pink-200 to-blue-200  rounded-full p-2 ">
                  <FaWallet className="text-white" />
                </div>
                <p className="text-xs">Transaction</p>
              </Link>
            </div>
          </div>
        </div>
        {/* Quick Link */}
        <div className="bg-[#d0d2d5] lg:w-full lg:h-[250px] h-full w-[96%] p-4 lg:mt-0 mt-4">
          <p className="text-center pb-6">Quick Link</p>
          <div className=" grid lg:grid-cols-2 gap-3">
            {/* First Grid */}
            <div className="space-y-2">
              <Link
                to="/data"
                className="bg-white px-3 py-2 w-full rounded-md flex flex-row items-center gap-2"
              >
                <div className="bg-gradient-to-r from-pink-200 to-blue-200  rounded-full p-2 ">
                  <img src={Data} className="h-5 w-5" />
                </div>
                <p className="text-xs">Purchase Data</p>
              </Link>
              <Link
                to="/airtime"
                className="bg-white px-3 py-2 w-full  rounded-md flex flex-row items-center gap-2"
              >
                <div className="bg-gradient-to-r from-pink-200 to-blue-200  rounded-full p-2 ">
                  <img src={airtime} className="h-5 w-5" />
                </div>
                <p className="text-xs">Purchase Airtime</p>
              </Link>
              <Link
                to="/targetSavings"
                className="bg-white px-3 py-2 w-full  rounded-md flex flex-row items-center gap-2"
              >
                <div className="bg-gradient-to-r from-pink-200 to-blue-200  rounded-full p-2 ">
                  <img src={Savings} className="h-5 w-5" />
                </div>
                <p className="text-xs">Target Saving</p>
              </Link>
            </div>

            {/* Second Grid */}
            <div className="space-y-2">
              <Link
                to="/electricity"
                className="bg-white px-3 py-2 w-full  rounded-md flex flex-row items-center gap-2"
              >
                <div className="bg-gradient-to-r from-pink-200 to-blue-200 rounded-full p-2">
                  <img src={Electricity} className="h-5 w-5" />
                </div>
                <p className="text-xs">Electricity Sub</p>
              </Link>
              <Link
                to="/tvSubscription"
                className="bg-white px-3 py-2 w-full  rounded-md flex flex-row items-center gap-2"
              >
                <div className="bg-gradient-to-r from-pink-200 to-blue-200  rounded-full p-2 ">
                  <img src={Sub} className="h-5 w-5" />
                </div>
                <p className="text-xs">TV Sub</p>
              </Link>
              <Link
                to="/bankTransfer"
                className="bg-white px-3 py-2 w-full  rounded-md flex flex-row items-center gap-2"
              >
                <div className="bg-gradient-to-r from-pink-200 to-blue-200  rounded-full p-2 ">
                  <img src={Bank} className="h-5 w-5" />
                </div>
                <p className="text-xs">Bank Transfer</p>
              </Link>
            </div>
          </div>
        </div>
        {/* Swiper */}

        <div className="h-[100%] lg:h-full lg:w-full w-screen rounded-xl  mx-auto ">
          <Adverts />
        </div>
        <ChartJsExample />
      </div>
    </div>
  );
};

export default Dashboard;
