import React from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import ReferralsTab from "../../components/Dashboard/ReferralsTab";

const ReferralPerformance = () => {
  const stats = [
    {
      data: "N35,000",
      title: "Total Referral Earned",
    },
    {
      data: "45",
      title: "Total Referrals",
    },
  ];
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-full py-12 lg:w-full relative">
        <Link to="/referrals">
          <IoArrowBackCircleSharp className="text-5xl absolute top-3 left-3 cursor-pointer" />
        </Link>
        <div className=" bg-gray-100 lg:w-[90%] w-full p-6 rounded-lg">
          <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex md:px-8">
            <div className="sm:hidden lg:block lg:max-w-xl">
              <img
                src="https://images.unsplash.com/photo-1622675363311-3e1904dc1885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                className="rounded-lg"
                alt=""
              />
            </div>
            <div className="mt-6 gap-6 sm:mt-0 md:flex lg:block">
              <div className="max-w-2xl">
                <h3 className="text-gray-600 text-3xl font-semibold sm:text-4xl">
                  Referral Performance
                </h3>
              </div>
              <div className="flex-none mt-6 md:mt-0 lg:mt-6">
                <ul className="inline-grid gap-y-8 gap-x-14 grid-cols-2">
                  {stats.map((item, idx) => (
                    <li key={idx} className="">
                      <p className="mt-3 font-medium whitespace-nowrap">
                        {item.title}
                      </p>
                      <h4 className="text-4xl text-[#e300ef] font-semibold">
                        {item.data}
                      </h4>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <ReferralsTab />
      </div>
    </div>
  );
};

export default ReferralPerformance;
