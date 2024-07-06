import React, { useState } from "react";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import CVV from "../../assets/cvv.png";
import cards from "../../assets/cards.png";
import SavedCards from "./SavedCards";

const CardDeposit = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [showNewComponent, setShowNewComponent] = useState(false);

  const handleSaveCard = () => {
    setShowNewComponent(true);
  };

  const handleCloseNewComponent = () => {
    setShowNewComponent(false);
  };
  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const closeInfo = () => {
    setShowInfo(false);
  };

  return (
    <div className="lg:px-28 px-0">
      <div className="pt-4">
        <input
          type="number"
          id="number-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Card Number"
          required
        />
      </div>
      <div className="flex flex-row lg:gap-8 gap-2 pt-6 w-full">
        <div className="w-full">
          <label
            htmlFor="number-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Expiry
          </label>
          <input
            type="date"
            id="number-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Expiry"
            required
          />{" "}
        </div>
        <div className="w-full">
          <label
            htmlFor="number-input"
            className="flex flex-row items-center mb-2 text-sm font-medium text-gray-900 dark:text-white gap-2"
          >
            CVV{" "}
            <BsFillQuestionCircleFill
              onClick={toggleInfo}
              className="cursor-pointer"
            />
          </label>
          <input
            type="number"
            id="number-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="CCV"
            required
          />
        </div>
        {showInfo && (
          <div className="mt-4 p-4 border rounded-lg bg-gray-100 absolute z-50">
            <div className="flex flex-col gap-4 ">
              <img
                src={CVV} // Replace with actual image URL
                alt="Credit Card"
                className="mb-4 mx-auto"
              />
              <p className="text-sm text-gray-700 text-center font-extrabold">
                The CVV (Card Verification Value) is a 3-digit number on the
                back of your credit card. It is used to enhance the security of
                online transactions.
              </p>
              <div
                onClick={closeInfo}
                className=" text-gray-700 border-gray-500 px-4 py-2 rounded-lg flex justify-end cursor-pointer"
              >
                OK
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-row items-center justify-between mt-4 ">
        <div className="flex flex-row items-center gap-2">
          Save Card <input type="checkbox" />
        </div>
        <button
          onClick={handleSaveCard}
          className="  text-gray-600 px-4 rounded-lg"
        >
          Use Saved Cards <span className="font-extrabold">↓</span>
        </button>
      </div>

      {showNewComponent && <SavedCards onClose={handleCloseNewComponent} />}
      <div className="w-full pt-6 relative">
        <label
          htmlFor="number-input"
          className="block mb-2 text-sm font-medium text-gray-900 text-right"
        >
          Balance (N): 500
        </label>
        <input
          type="number"
          id="number-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Amount (N)"
          required
        />{" "}
        <p className="absolute bottom-3 right-4 text-gray-500 text-xs">
          Min. N100.00
        </p>
      </div>

      <div className="cursor-pointer mt-8 flex items-end justify-center px-4 py-2 text-white bg-[#151316] rounded-lg duration-150 hover:bg-black active:shadow-lg">
        Fund Wallet
      </div>
      <img
        src={cards}
        className="object-contain flex items-center justify-center mx-auto pt-12"
      />
    </div>
  );
};

export default CardDeposit;
