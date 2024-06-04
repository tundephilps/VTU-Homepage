import React from "react";

import ball2 from "../../../../assets/ball2.png";

import ball1 from "../../../../assets/ball1.png";
import book from "../../../../assets/book.png";
import objects from "../../../../assets/objects.png";
import guard from "../../../../assets/guard.png";
import Link1 from "../../../../assets/Link1.png";
import Link2 from "../../../../assets/Link2.png";
import Link3 from "../../../../assets/Link3.png";
import contwith from "../../../../assets/contwith.png";
import { FaRegEyeSlash } from "react-icons/fa";
import { RiKey2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewPasswordMobile = () => {
  return (
    <div>
      <div className="w-full h-screen bg-white mx-auto flex items-center relative">
        <div className="bg-[#151316] h-[100%] w-[430px] overflow-hidden mx-auto rounded-lg relative z-30">
          <img src={ball1} className="absolute bottom-[40%] right-[-30%]" />
          <img src={ball2} className="absolute bottom-[-10%] left-[-30%]" />

          <img src={book} className="absolute bottom-[-5%] right-[-1%]" />

          <img src={objects} className="absolute top-[5%] right-[-1%]" />
          <div className="h-[30%] w-full relative ">
            <img src={guard} className="h-[250px] w-[200px] mx-auto pt-6 " />
          </div>
          <div
            className="glassmorphic h-[70%] w-full  "
            // className="glassmorphic"
            style={{
              // Add a blur effect to the background
              backdropFilter: "blur(4px)",
              // Make the div transparent
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderTopLeftRadius: "50px",

              borderTopRightRadius: "50px",
            }}
          >
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 ">
              <div className="max-w-lg mx-auto text-center space-y-1 sm:text-center">
                <p className="text-gray-100 text-3xl font-semibold">
                  New Password
                </p>
                <p className="text-white text-xs">
                  Enter and confirm password to complete
                </p>
              </div>
              <div className="mt-12 max-w-lg mx-auto">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="space-y-6 text-gray-100 text-xs"
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

                <div className="flex items-center justify-center mt-14">
                  <p className="text-white">
                    Or Continue with{" "}
                    <Link to="/Login">
                      <span className="text-blue-600 hover:underline hover:cursor-pointer font-extrabold">
                        Login
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPasswordMobile;
