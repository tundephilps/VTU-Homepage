import React from "react";
import Header from "../../components/Dashboard/Header";
import { Link } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";

const WalletTransfer = () => {
  return (
    <div>
      <div className="p-2">
        <Header />

        <p className="text-2xl font-bold pt-8">Bank Transfer</p>

        <div className="bg-gray-100 p-6 mt-8 lg;mb-0 mb-36">
          <div>
            <label
              htmlFor="input-group-1"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Amount
            </label>
            <div className="relative mb-6 lg:w-[100%]">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <p>₦</p>
              </div>
              <input
                type="number"
                id="input-group-1"
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5  "
                placeholder=""
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="input-group-1"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Comment
            </label>
            <div className="relative mb-6 lg:w-[100%]">
              <textarea
                type="text"
                className="w-full h-[200px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5  "
                placeholder="Whats this for? (Optional)"
              />
            </div>
          </div>
          <div className="w-full pt-8 block lg:mb-12 mb-32">
            <Link
              to="/PaymentSummaryBank"
              className="block text-center w-full px-4 py-3  text-white font-medium bg-gradient-to-r from-[#9C3FE4] to-[#C65647] active:bg-indigo-600 rounded-lg duration-150"
            >
              Confirm Amount
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletTransfer;
