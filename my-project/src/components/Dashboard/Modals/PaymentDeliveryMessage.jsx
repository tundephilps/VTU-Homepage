import React from "react";
import Delivery from "../../../assets/Delivery.png";
import { Link } from "react-router-dom";

const PaymentDeliveryMessage = ({ onClose }) => {
  return (
    <div>
      <div className=" flex flex-col gap-4 items-center justify-center mx-auto">
        <img src={Delivery} />
        <p className="text-xl font-semibold">
          N1000 has been Sent to Fagorusi Jeremiah
        </p>
        <p className="text-[#3b3758]">Do you want to save as favourites</p>
        <div className="flex flex-row justify-between pt-6 gap-12">
          <Link to="/BankTransfer">
            <button className="active:bg-indigo-600 duration-150 z-50 text-white cursor-pointer bg-gradient-to-r from-[#9C3FE4] to-[#C65647] font-medium rounded-lg text-sm px-8 py-2.5 me-2 mb-2  ">
              Yes
            </button>
          </Link>
          <Link to="/BankTransfer">
            <button className="py-2.5 px-8 me-2 mb-2 text-sm font-medium text-[#C65647] focus:outline-none bg-white rounded-lg border border-[#C65647] hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100">
              No
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentDeliveryMessage;
