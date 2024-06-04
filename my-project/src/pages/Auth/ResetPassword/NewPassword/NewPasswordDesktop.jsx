import React from "react";

import Logo from "../../../../assets/logo.png";

import { FaRegEyeSlash } from "react-icons/fa";
import { RiKey2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewPasswordDesktop = () => {
  return (
    <div>
      <main className="w-full flex">
        {/* Right Side */}
        <div className="relative flex-1 hidden items-center justify-center h-screen bg-[#151316] lg:flex">
          <div className="relative z-10 w-full max-w-md">
            <img src={Logo} className="absolute top-[-30%] left-[-10%]" />
            <div className=" mt-16 space-y-3">
              <h3 className="text-white text-3xl font-bold">
                Start growing your business quickly
              </h3>
              <p className="text-gray-300">
                Create an account and get access to all features.....
              </p>
              <div className="flex items-center -space-x-2 overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/women/79.jpg"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/86.jpg"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <p className="text-sm text-gray-400 font-medium translate-x-5">
                  Join 5.000+ users
                </p>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-0 my-auto h-[500px]"
            style={{
              background:
                "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
              filter: "blur(118px)",
            }}
          ></div>
        </div>
        <div className="flex-1 flex items-center justify-center h-screen">
          <div className="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0">
            <div className="">
              <img
                src="https://floatui.com/logo.svg"
                width={150}
                className="lg:hidden"
              />
              <div className="mt-5 space-y-2">
                <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                  New Password
                </h3>
                <p className="">Enter and Confirm Password to Complete</p>
              </div>
            </div>

            <div className="mt-4 max-w-lg mx-auto">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-6 text-gray-800 text-xs"
              >
                <div>
                  <label className="font-medium">New Password</label>
                  <div className="relative">
                    <input
                      type="password"
                      required
                      className="w-full pl-12 mt-2 px-3 py-4 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                    <FaRegEyeSlash className="absolute top-[45%] right-[10%] z-50 text-[15px]" />
                    <RiKey2Line className="absolute top-[38%] left-[5%] z-50 text-2xl " />
                  </div>
                </div>

                <div>
                  <label className="font-medium">Confirm Password</label>
                  <div className="relative">
                    <input
                      type="password"
                      required
                      className="w-full pl-12 mt-2 px-3 py-4 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                    <FaRegEyeSlash className="absolute top-[45%] right-[10%] z-50 text-[15px]" />
                    <RiKey2Line className="absolute top-[38%] left-[5%] z-50 text-2xl " />
                  </div>
                </div>
                <div className="h-4" />
                <button className="w-full px-4 py-3  text-white font-medium bg-gradient-to-r from-[#9C3FE4] to-[#C65647] active:bg-indigo-600 rounded-lg duration-150">
                  Change Password
                </button>
              </form>

              <div className="flex items-center justify-center mt-4">
                <p>
                  Or Continue with{" "}
                  <Link to="/Login">
                    <span className="text-blue-600 hover:underline hover:cursor-pointer">
                      Login
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewPasswordDesktop;
