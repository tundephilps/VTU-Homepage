import React from "react";
import hero from "../assets/hero.png";

import Person from "../assets/Person.png";
import Vector1 from "../assets/Vector1.png";
import Vector2 from "../assets/Vector2.png";
import Vector3 from "../assets/Vector3.png";
import Vector4 from "../assets/Vector4.png";
import Vector5 from "../assets/Vector5.png";
import Vector6 from "../assets/Vector6.png";

const Services = () => {
  return (
    <section className="relative lg:block hidden " id="Services">
      {/* Background Image */}
      <img
        src={hero}
        alt=""
        className="absolute inset-[0%]  inline-block lg:h-[90%] h-[220vh] w-full object-cover z-[-10]"
      />
      <section className="text-gray-600 body-font">
        <div className="container px-1 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-sm text-white tracking-widest font-medium title-font pb-3">
              Few out of many
            </h2>
            <h1 className="sm:text-3xl text-4xl font-medium title-font text-[#247fff]">
              Waradata <span className="text-white">Services</span>
            </h1>
            <p className="pt-3">
              We provide most affordable data and airtime for MTN, GLO, AIRTEL,
              9MOBILE
              <br />
              Coming soon with subscription for TV and Electricity.
            </p>
          </div>
          <div className="flex lg:justify-between flex-row -m-2">
            <div className="p-4 ">
              <ul className="grid grid-row-3 gap-16 items-center justify-center [&>*]:bg-gray-700 [&>*]:w-full [&>*]:h-20 [&>*]:flex sm:[&>*]:px-14">
                {/* LOGO 1 */}
                <li className="relative items-center justify-center">
                  <div className=" absolute right-[-27%] top-[-10%] bg-gradient-to-r from-[#A81375] to-[#B3652C] h-[98px] w-[98px] rounded-full flex items-center justify-center">
                    <img src={Vector1} className="h-[60px] " />
                  </div>
                  <p className="flex  text-[#247fff] text-2xl">Browsing Data</p>
                </li>

                {/* LOGO 2 */}
                <li className="relative items-center justify-center">
                  <div className=" absolute right-[-27%] top-[-10%] bg-gradient-to-r from-[#A81375] to-[#B3652C] h-[98px] w-[98px] rounded-full flex items-center justify-center">
                    <img src={Vector2} className="h-[60px] " />
                  </div>
                  <p className="flex  text-[#247fff] text-2xl">Airtime</p>
                </li>

                {/* LOGO 3 */}
                <li className="relative items-center justify-center">
                  <div className=" absolute right-[-27%] top-[-10%] bg-gradient-to-r from-[#A81375] to-[#B3652C] h-[98px] w-[98px] rounded-full flex items-center justify-center">
                    <img src={Vector3} className="h-[40px] " />
                  </div>
                  <p className="flex  text-[#247fff] text-2xl">
                    TV Subscription
                  </p>
                </li>
              </ul>
            </div>
            <div className="">
              <img src={Person} className="w-full h-[500px]" alt="" />
            </div>
            <div className=" ">
              <ul className="grid grid-row-3 gap-16 items-center justify-center [&>*]:bg-gray-700 [&>*]:w-full [&>*]:h-20 [&>*]:flex sm:[&>*]:px-14">
                {/* LOGO 1 */}
                <li className="relative items-center justify-center">
                  <div className=" absolute left-[-22%] top-[-10%] bg-gradient-to-r from-[#A81375] to-[#B3652C] h-[98px] w-[98px] rounded-full flex items-center justify-center">
                    <img src={Vector4} className="h-[60px] " />
                  </div>
                  <p className="flex  text-[#247fff] text-2xl">
                    Electricity Subscription
                  </p>
                </li>

                {/* LOGO 2 */}
                <li className="relative items-center justify-center">
                  <div className=" absolute left-[-22%] top-[-10%] bg-gradient-to-r from-[#A81375] to-[#B3652C] h-[98px] w-[98px] rounded-full flex items-center justify-center">
                    <img src={Vector5} className="h-[60px] " />
                  </div>
                  <p className="flex  text-[#247fff] text-2xl">Resell Data</p>
                </li>

                {/* LOGO 3 */}
                <li className="relative items-center justify-center">
                  <div className=" absolute left-[-22%] top-[-10%] bg-gradient-to-r from-[#A81375] to-[#B3652C] h-[98px] w-[98px] rounded-full flex items-center justify-center">
                    <img src={Vector6} className="h-[40px] " />
                  </div>
                  <p className="flex  text-[#247fff] text-2xl">
                    Resell Airtime
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Services;
