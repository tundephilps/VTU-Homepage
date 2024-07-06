import React, { useState } from "react";
import Header from "../../components/Dashboard/Header";

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Transactions = () => {
  const tableItems = [
    {
      name: "Data Purchase",
      details: "09033345533",
      date: "06 Mar 2023 - 09:39",
      price: "-10,000.00",
      status: "Pending",
    },
    {
      name: "Fund Wallet",
      details: "Credit Card",
      date: "06 Mar 2023 - 09:39",
      price: "65,000.00",
      status: "Completed",
    },
    {
      name: "DSTV Subscription",
      details: "236351079",
      date: "06 Mar 2023 - 09:39",
      price: "-3,000.00",
      status: "Pending",
    },
  ];

  const [visibility, setVisibility] = useState({
    main: true,
    spent: true,
    deposit: true,
    totalData: true,
    totalAirtime: true,
    totalTransfer: true,
  });

  const toggleVisibility = (key) => {
    setVisibility((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <div>
      <div className="p-2">
        <Header />
        <p className="text-2xl font-bold pt-8">Transaction</p>
        <div className="bg-gray-100 p-6 mt-8 lg:mb-0 mb-32 item">
          <div className="flex flex-wrap gap-x-12 gap-y-4 items-center justify-center">
            <div className="bg-[#33B786] p-6 px-24 rounded-lg relative">
              <p className="text-[#46237A] text-[16px]">Main Account</p>
              <p className="text-2xl font-bold">
                {visibility.main ? "N44,500.00" : "************"}
              </p>
              <button
                className="absolute top-4 right-4 text-[#46237A]"
                onClick={() => toggleVisibility("main")}
              >
                {visibility.main ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>
            </div>

            <div className="bg-[#E74F5B] p-6 px-24 rounded-lg relative">
              <p className="text-[#46237A] text-[16px]">Money Spent</p>
              <p className="text-2xl font-bold">
                {visibility.spent ? "N44,500.00" : "************"}
              </p>
              <button
                className="absolute top-4 right-4 text-[#46237A]"
                onClick={() => toggleVisibility("spent")}
              >
                {visibility.spent ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>
            </div>

            <div className="bg-[#E8A6A6] p-6 px-24 rounded-lg relative">
              <p className="text-[#46237A] text-[16px]">Deposit</p>
              <p className="text-2xl font-bold">
                {visibility.deposit ? "N44,500.00" : "************"}
              </p>
              <button
                className="absolute top-4 right-4 text-[#46237A]"
                onClick={() => toggleVisibility("deposit")}
              >
                {visibility.deposit ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>
            </div>

            <div className="bg-[#FFB8B8] p-6 px-24 rounded-lg relative">
              <p className="text-[#46237A] text-[16px]">Total Data</p>
              <p className="text-2xl font-bold">
                {visibility.totalData ? "N44,500.00" : "************"}
              </p>
              <button
                className="absolute top-4 right-4 text-[#46237A]"
                onClick={() => toggleVisibility("totalData")}
              >
                {visibility.totalData ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>
            </div>

            <div className="bg-[#FFD6D6] p-6 px-24 rounded-lg relative">
              <p className="text-[#46237A] text-[16px]">Total Airtime</p>
              <p className="text-2xl font-bold">
                {visibility.totalAirtime ? "N44,500.00" : "************"}
              </p>
              <button
                className="absolute top-4 right-4 text-[#46237A]"
                onClick={() => toggleVisibility("totalAirtime")}
              >
                {visibility.totalAirtime ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>
            </div>

            <div className="bg-[#FBBEBE] p-6 px-24 rounded-lg relative">
              <p className="text-[#46237A] text-[16px]">Total Transfer</p>
              <p className="text-2xl font-bold">
                {visibility.totalTransfer ? "N44,500.00" : "************"}
              </p>
              <button
                className="absolute top-4 right-4 text-[#46237A]"
                onClick={() => toggleVisibility("totalTransfer")}
              >
                {visibility.totalTransfer ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 relative h-max overflow-auto bg-gray-100 p-4">
          <table className="w-full table-auto text-sm text-center">
            <tbody className="text-gray-600 divide-y">
              {tableItems.map((item, idx) => (
                <tr key={idx}>
                  <td className="pr-6 py-4 whitespace-nowrap flex items-center justify-center">
                    {parseFloat(item.price.replace(/,/g, "")) > 0 ? (
                      <div className="text-green-500 flex items-center">
                        <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
                          +
                        </div>
                      </div>
                    ) : (
                      <div className="text-red-500 flex items-center">
                        <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
                          -
                        </div>
                      </div>
                    )}
                  </td>

                  <td className="pr-6 py-4 whitespace-nowrap">{item.name}</td>

                  <td className="pr-6 py-4 whitespace-nowrap">
                    {item.details}
                  </td>
                  <td className="pr-6 py-4 whitespace-nowrap">{item.date}</td>

                  <td
                    className={`pr-6 py-4 whitespace-nowrap ${
                      parseFloat(item.price.replace(/,/g, "")) > 0
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {item.price}
                  </td>
                  <td className="pr-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-2 rounded-full font-semibold text-xs ${
                        item.status == "Completed"
                          ? "text-green-100 bg-[#33B786]"
                          : "text-slate-70 bg-[#d4d4d4]"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="text-right whitespace-nowrap">
                    <a
                      href="javascript:void()"
                      className="py-1.5 px-3 text-gray-600 hover:text-gray-500 duration-150 hover:bg-gray-50 border rounded-lg"
                    >
                      View
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
