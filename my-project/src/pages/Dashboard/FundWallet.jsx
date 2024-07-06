import React, { useState } from "react";
import Header from "../../components/Dashboard/Header";

import BankTransfer from "../../components/Dashboard/BankTransfer";
import CardDeposit from "../../components/Dashboard/CardDeposit";

const FundWallet = () => {
  const [activeTab, setActiveTab] = useState(0);
  const TransferType = [
    {
      label: "Bank Transfer",
      content: <BankTransfer />,
    },
    {
      label: "Card Deposit",
      content: <CardDeposit />,
    },
  ];

  return (
    <div>
      <div>
        <div className="p-2">
          <Header />
          <p className="text-2xl font-bold pt-8">Fund Wallet</p>
          <div className="bg-gray-100 p-6 mt-8 lg:mb-0 mb-32 item">
            <div className="flex flex-wrap gap-12 justify-center pb-8">
              {TransferType.map((tab, index) => (
                <div
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`bg-gradient-to-r from-[#9C3FE4] hover:cursor-pointer shadow-lg  to-[#C65647] p-3 lg:w-[15%] w-full rounded-lg ${
                    activeTab === index ? "shadow-black" : ""
                  }`}
                >
                  <h1 className="text-white text-sm font-extrabold text-center">
                    {" "}
                    {tab.label}
                  </h1>
                </div>
              ))}
            </div>

            <div className=" ">{TransferType[activeTab].content}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundWallet;
