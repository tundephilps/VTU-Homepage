import React from "react";
import { LuCopy } from "react-icons/lu";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BankTransfer = () => {
  const accountDetails = [
    {
      code: "993648727399",
      bank: "Wema Bank",
      text: "text-purple-500",
      color: "bg-purple-500",
      shadow: "shadow-purple-900",
    },
    {
      code: "887264728366",
      bank: "Monie Point",
      text: "text-blue-500",
      color: "bg-blue-500",
      shadow: "shadow-blue-900",
    },
    {
      code: "123456789012",
      bank: "Sterling Bank",

      text: "text-red-500",
      color: "bg-red-500",
      shadow: "shadow-red-900",
    },
  ];

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code).then(() => {
      toast.success("Code has been copied!");
    });
  };

  return (
    <div>
      <div className="flex flex-wrap">
        <ToastContainer />
        {accountDetails.map((account, index) => (
          <div
            key={index}
            className="card m-auto text-gray-300 w-[clamp(260px,80%,300px)] hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 m-4 rounded-lg overflow-hidden relative"
          >
            <div className="px-8 py-10">
              <div
                className={`${account.color} w-10 h-10 rounded-full rounded-tl-none mb-4 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:${account.shadow} transition-all`}
              ></div>
              <div className="font-bold text-sm">
                Top up your account via transfer
              </div>
              <div className="text-gray-300 uppercase tracking-widest">
                ACCOUNT DETAILS
              </div>
              <div className="text-gray-400 mt-8">
                <div className="flex flex-row gap-5 items-center pt-8">
                  <p className="font-bold">{account.code}</p>
                  <button
                    onClick={() => handleCopy(account.code)}
                    className={`${account.text}`}
                  >
                    <LuCopy className="text-2xl" />
                  </button>
                </div>
                <p>{account.bank}</p>
                <p className="text-white font-extrabold">FAG</p>
              </div>
            </div>
            <div className="h-2 w-full bg-gradient-to-l via-yellow-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
            <div className="h-0.5 group-hover:w-full bg-gradient-to-l via-yellow-950 group-hover:via-yellow-500 w-[70%] m-auto rounded transition-all"></div>
          </div>
        ))}
      </div>
      <h1 className="text-center text-[22px] font-extrabold pt-12">
        Your Bank account name will display MFY/ Gratmus Digital Services-Fag
      </h1>
    </div>
  );
};

export default BankTransfer;
