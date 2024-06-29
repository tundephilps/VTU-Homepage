import React, { useState } from "react";
import Header from "../../components/Dashboard/Header";
import hands from "../../assets/hands.png";
import { LuCopy } from "react-icons/lu";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const CodeSnippet = ({ code }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setIsCopied(true);
      toast.success("Code has been copied!");
      setTimeout(() => setIsCopied(false), 3000);
    });
  };

  return (
    <div className="flex flex-row gap-5 items-center pt-8">
      <p className="text-[23px]">{code}</p>
      <button onClick={handleCopy} className="  text-[#9747FF]  ">
        <LuCopy className="text-2xl" />
      </button>
      <ToastContainer />
    </div>
  );
};

const Referrals = () => {
  const code = `
FAGOR5BW
`;

  return (
    <div className="p-2">
      <Header />
      <p className="text-2xl font-bold pt-8 ">Referrals</p>

      <div className="bg-gray-100 lg:p-6 p-2 mt-8 flex flex-col items-center justify-center">
        <img src={hands} className="" />

        <p className="text-2xl text-[#252525] font-bold pt-8 ">
          Refer and Earn
        </p>
        <p className="text-[#979797] pt-4 text-center">
          Earn N500 on every users that register using your referral code and
          deposit minimum of N500 <br /> for thier first deposit
        </p>
        <CodeSnippet code={code} />

        <div className="w-[50%] pt-8 block lg:mb-12 mb-32">
          <Link
            to=""
            className="block text-center w-full px-4 py-3  text-white font-medium bg-gradient-to-r from-[#9C3FE4] to-[#C65647] active:bg-indigo-600 rounded-lg duration-150"
          >
            Share Code
          </Link>
        </div>
        <Link to="/referralperformance" className="text-[#e300ef]">
          View Referral Performance
        </Link>
      </div>
    </div>
  );
};

export default Referrals;
