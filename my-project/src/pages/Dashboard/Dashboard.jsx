import React from "react";
import Header from "../../components/Dashboard/Header";
import card from "../../assets/card.png";
import { FaWallet } from "react-icons/fa";
import Data from "../../assets/Data.png";

import Savings from "../../assets/Savings.png";
import airtime from "../../assets/airtime.png";

import Bank from "../../assets/Bank.png";
import Sub from "../../assets/Sub.png";
import Electricity from "../../assets/Electricity.png";
import Adverts from "../../components/Dashboard/Adverts";
import ChartJsExample from "../../components/Dashboard/ChartsTable";
//import ChartsTable from "../../components/Dashboard/ChartsTable";

const Dashboard = () => {
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
          <div className="mx-auto relative flex flex-row justify-between p-6 w-full">
            <div>
              <p className="text-white lg:text-2xl text-lg pt-[120px] font-bold font-serif">
                N1,800,000
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-white px-3 py-1 w-[140px] rounded-md flex flex-row items-center gap-2">
                <div className="bg-gradient-to-r from-pink-200 to-blue-200  rounded-full p-2 ">
                  <FaWallet className="text-white" />
                </div>
                <p className="text-xs">Fund Wallet</p>
              </div>
              <div className="bg-white px-3 py-1 w-[140px] rounded-md flex flex-row items-center gap-2">
                <div className="bg-gradient-to-r from-pink-200 to-blue-200  rounded-full p-2 ">
                  <FaWallet className="text-white" />
                </div>
                <p className="text-xs">Transaction</p>
              </div>
            </div>
          </div>
        </div>
        {/* Quick Link */}
        <div className="bg-[#d0d2d5] lg:w-full lg:h-[250px] h-full w-[96%] p-4 lg:mt-0 mt-4">
          <p className="text-center pb-6">Quick Link</p>
          <div className=" grid lg:grid-cols-2 gap-3">
            {/* First Grid */}
            <div className="space-y-2">
              <div className="bg-white px-3 py-2 w-full rounded-md flex flex-row items-center gap-2">
                <div className="bg-gradient-to-r from-pink-200 to-blue-200  rounded-full p-2 ">
                  <img src={Data} className="h-5 w-5" />
                </div>
                <p className="text-xs">Purchase Data</p>
              </div>
              <div className="bg-white px-3 py-2 w-full  rounded-md flex flex-row items-center gap-2">
                <div className="bg-gradient-to-r from-pink-200 to-blue-200  rounded-full p-2 ">
                  <img src={airtime} className="h-5 w-5" />
                </div>
                <p className="text-xs">Purchase Airtime</p>
              </div>
              <div className="bg-white px-3 py-2 w-full  rounded-md flex flex-row items-center gap-2">
                <div className="bg-gradient-to-r from-pink-200 to-blue-200  rounded-full p-2 ">
                  <img src={Savings} className="h-5 w-5" />
                </div>
                <p className="text-xs">Target Saving</p>
              </div>
            </div>

            {/* Second Grid */}
            <div className="space-y-2">
              <div className="bg-white px-3 py-2 w-full  rounded-md flex flex-row items-center gap-2">
                <div className="bg-gradient-to-r from-pink-200 to-blue-200 rounded-full p-2">
                  <img src={Electricity} className="h-5 w-5" />
                </div>
                <p className="text-xs">Electricity Sub</p>
              </div>
              <div className="bg-white px-3 py-2 w-full  rounded-md flex flex-row items-center gap-2">
                <div className="bg-gradient-to-r from-pink-200 to-blue-200  rounded-full p-2 ">
                  <img src={Sub} className="h-5 w-5" />
                </div>
                <p className="text-xs">TV Sub</p>
              </div>
              <div className="bg-white px-3 py-2 w-full  rounded-md flex flex-row items-center gap-2">
                <div className="bg-gradient-to-r from-pink-200 to-blue-200  rounded-full p-2 ">
                  <img src={Bank} className="h-5 w-5" />
                </div>
                <p className="text-xs">Bank Transfer</p>
              </div>
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
