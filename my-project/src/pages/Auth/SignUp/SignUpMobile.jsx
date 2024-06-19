import React, { useState } from "react";
import ball2 from "../../../assets/ball2.png";
import ball1 from "../../../assets/ball1.png";
import book from "../../../assets/book.png";
import objects from "../../../assets/objects.png";
import avatar from "../../../assets/Avatar.png";
import Link1 from "../../../assets/Link1.png";
import Link2 from "../../../assets/Link2.png";
import Link3 from "../../../assets/Link3.png";
import Signwith from "../../../assets/Signwith.png";
import { Link } from "react-router-dom";
import { Modal } from "../../../components/Dashboard/Modals/Modal";

const SignUpMobile = () => {
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
    <div className="w-full h-screen bg-white mx-auto flex items-center relative">
      <div className="bg-[#151316] h-[110%] w-[430px] overflow-hidden mx-auto rounded-lg relative z-30">
        <img src={ball1} className="absolute bottom-[40%] right-[-30%]" />
        <img src={ball2} className="absolute bottom-[-10%] left-[-30%]" />

        <img src={book} className="absolute bottom-[-5%] right-[-1%]" />

        <img src={objects} className="absolute top-[5%] right-[-1%]" />
        <div className="h-[20%] w-full relative ">
          <img
            src={avatar}
            className="h-[150px] w-[300px] absolute right-[-10%]  bottom-0"
          />
        </div>
        <div
          className="glassmorphic h-[80%] w-full  "
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
            <div className="max-w-lg mx-auto space-y-1 sm:text-center">
              <p className="text-gray-100 text-3xl font-semibold">
                Get Started
              </p>
              <p className="text-white text-xs">
                Best Prices for Airtime and Data
              </p>
            </div>
            <div className="mt-4 max-w-lg mx-auto">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-1 text-gray-100 text-xs"
              >
                <div className="flex flex-col items-center gap-y-1 gap-x-6 [&>*]:w-full sm:flex-row">
                  <div>
                    <label className="font-medium">First name</label>
                    <input
                      type="text"
                      required
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="font-medium">Last name</label>
                    <input
                      type="text"
                      required
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-medium">Middle Name</label>
                  <input
                    type="text"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Email Address</label>
                  <input
                    type="text"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Gender</label>
                  <div className="relative mt-2">
                    <div className="absolute inset-y-0 left-3 my-auto h-16 flex items-center ">
                      <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                    <div className="py-5 w-24 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" />
                  </div>
                </div>

                <div className="flex flex-col items-center gap-y-2 gap-x-6 [&>*]:w-full sm:flex-row">
                  <div>
                    <label className="font-medium">Username</label>
                    <input
                      type="text"
                      required
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="font-medium">Password</label>
                    <input
                      type="password"
                      required
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-medium">Mobile number</label>
                  <div className="relative mt-2">
                    <input
                      type="number"
                      placeholder="+234"
                      required
                      className="w-full pl-[1.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                  </div>
                </div>
                <div className="h-4" />
                <button
                  onClick={() => handleOpenModal("Email Verification")}
                  className="w-full px-4 py-3  text-white font-medium bg-gradient-to-r from-[#9C3FE4] to-[#C65647] active:bg-indigo-600 rounded-lg duration-150"
                >
                  Sign Up
                </button>
              </form>
              <div className="mx-auto flex items-center justify-start mt-2">
                <img src={Signwith} className="mx-auto" />
              </div>
              <div className="flex flex-row mx-auto gap-4 items-center justify-center mt-2">
                <img src={Link2} />
                <img src={Link1} />

                <img src={Link3} />
              </div>
              <div className="flex items-center justify-center mt-4">
                <p className="text-white">
                  Already have an Account?{" "}
                  <Link to="/Login">
                    <span className="text-blue-600 hover:underline hover:cursor-pointer">
                      Sign In
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showModal} onClose={handleCloseModal} formType={formType} />
    </div>
  );
};

export default SignUpMobile;
