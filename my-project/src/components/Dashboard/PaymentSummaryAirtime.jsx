import React, { useState } from "react";
import wallets from "../../assets/wallets.png";
import { Link } from "react-router-dom";
import referrals from "../../assets/referrals.png";
import { Modal } from "./Modals/Modal";
import { IoArrowBackCircleSharp } from "react-icons/io5";

const PaymentSummaryAirtime = () => {
  const [showModal, setShowModal] = useState(false);
  const [formType, setFormType] = useState("");

  const handleOpenModal = (type) => {
    setFormType(type);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="flex items-center justify-center h-[100vh] lg:w-full relative">
      <Link to="/Airtime">
        <IoArrowBackCircleSharp className="text-5xl absolute top-3 left-3 cursor-pointer" />
      </Link>
      <div className=" bg-gray-100 lg:w-[70%] w-full p-6 rounded-lg">
        <p className="text-gray-600 text-2xl font-extrabold text-center">
          Airtime Payment Summary
        </p>
        <p className="text-3xl text-center text-[#fd1eb0] font-bold pb-4">
          N990
        </p>
        <div className="flex flex-row justify-between text-sm font-extrabold text-gray-600">
          <div className="space-y-4">
            <p>Amount</p>
            <p>Provider</p>
            <p>Mobile Number</p>
            <p>WaraData Discount</p>
          </div>
          <div className="text-end space-y-4">
            <p>N1,000</p>
            <p>GLO</p>
            <p>090333364755</p>
            <p>N10</p>
          </div>
        </div>
        <div className="space-y-6">
          <button
            type="button"
            className="mt-6 flex items-center w-full gap-6 text-gray-900 bg-white border border-yellow-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            <img src={wallets} />
            <div className="text-start">
              <p>Wallet Balance</p>
              <p>N100,000</p>
            </div>
          </button>
          <button
            type="button"
            className="mt-6 flex items-center w-full gap-6 text-gray-900 bg-white border border-yellow-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            <img src={referrals} />
            <div className="text-start">
              <p>Referral Bonus</p>
              <p>N50,000</p>
            </div>
          </button>
          <button
            onClick={() => handleOpenModal("Payment Confirmation")}
            className=" w-full px-4 py-3  text-white font-medium bg-gradient-to-r from-[#9C3FE4] to-[#C65647] active:bg-indigo-600 rounded-xl duration-150"
          >
            Confirm Payment
          </button>
        </div>

        <Modal
          show={showModal}
          onClose={handleCloseModal}
          formType={formType}
        />
      </div>
    </div>
  );
};

export default PaymentSummaryAirtime;
