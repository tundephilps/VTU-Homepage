import React, { useState } from "react";
import hero from "../assets/hero.png";

import MTN from "../assets/MTN.png";

import AIRTEL from "../assets/AIRTEL.png";
import ETI from "../assets/ETI.png";
import GLO from "../assets/GLO.png";

const Plan = () => {
  const [data, setData] = useState([
    { data: "500MB", amount: "N120", days: "30 Days" },
    { data: "1GB", amount: "N260", days: "30 Days" },
    { data: "2GB", amount: "N480", days: "39 Days" },
    { data: "3GB", amount: "N720", days: "30 Days" },
    { data: "5GB", amount: "N1200", days: "30 Days" },
    { data: "10GB", amount: "N2400", days: "30 Days" },
  ]);

  const [data2, setData2] = useState([
    { data: "500MB", amount: "N120", days: "30 Days" },
    { data: "1GB", amount: "N240", days: "30 Days" },
    { data: "2GB", amount: "N480", days: "39 Days" },
    { data: "3GB", amount: "N720", days: "30 Days" },
    { data: "5GB", amount: "N1200", days: "30 Days" },
    { data: "10GB", amount: "N2400", days: "30 Days" },
  ]);

  const [data3, setData3] = useState([
    { data: "500MB", amount: "N120", days: "30 Days" },
    { data: "1GB", amount: "N240", days: "30 Days" },
    { data: "2GB", amount: "N480", days: "39 Days" },
    { data: "3GB", amount: "N720", days: "30 Days" },
    { data: "5GB", amount: "N1200", days: "30 Days" },
    { data: "10GB", amount: "N2400", days: "30 Days" },
  ]);

  const [data4, setData4] = useState([
    { data: "500MB", amount: "N120", days: "30 Days" },
    { data: "1GB", amount: "N240", days: "30 Days" },
    { data: "2GB", amount: "N480", days: "39 Days" },
    { data: "3GB", amount: "N720", days: "30 Days" },
    { data: "5GB", amount: "N1200", days: "30 Days" },
    { data: "10GB", amount: "N2400", days: "30 Days" },
  ]);

  return (
    <section className="relative" id="Pricing">
      {/* Background Image */}
      <img
        src={hero}
        alt=""
        className="absolute inset-[0%] z-[-10] inline-block lg:h-[100vh] md:h-[155vh] h-[110%] w-full object-cover"
      />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="text-3xl lg:text-4xl font-extrabold title-font mb-2 text-gray-100 lg:w-[60%] w-full">
                Most Affordable MTN SME, GLO, AIRTEL and 9MOBILE CG Data Pricing
                List
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              MTN SME Data is a special package that designed for small and
              medium businesses. It gives you a flat rate for data that you can
              use to connect your devices, such as laptops and tablets, to the
              internet.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* MTN Card */}
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div
                className="bg-[#FFDD55] rounded-xl p-6 "
                style={{ borderRadius: "20px 70px 20px 20px" }}
              >
                <div className="flex flex-row justify-between items-center">
                  <img src={MTN} className="h-12 w-12 " />
                  <div>
                    <p>*461*4#</p>
                    <p>Check Balance</p>
                  </div>
                </div>
                <div className="container mx-auto  pt-6">
                  <table className="table-fixed w-full">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-1 py-2 text-lg font-bold">Data</th>
                        <th className="px-1 py-2 text-lg font-bold">Amount</th>
                        <th className="px-1 py-2 text-lg font-bold">Days</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item, index) => (
                        <tr key={index}>
                          <td className="px-1 py-2 border-b border-gray-200">
                            {item.data}
                          </td>
                          <td className="px-1 py-2 border-b border-gray-200">
                            {item.amount}
                          </td>
                          <td className="px-1 py-2 border-b border-gray-200">
                            {item.days}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* Airtel Card */}
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div
                className="bg-[#FF5555] rounded-xl p-6 "
                style={{ borderRadius: "20px 70px 20px 20px" }}
              >
                <div className="flex flex-row justify-between items-center">
                  <img src={AIRTEL} className="h-12 w-12 " />
                  <div>
                    <p></p>
                    <p></p>
                  </div>
                </div>
                <div className="container mx-auto  pt-6">
                  <table className="table-fixed w-full">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-1 py-2 text-lg font-bold">Data</th>
                        <th className="px-1 py-2 text-lg font-bold">Amount</th>
                        <th className="px-1 py-2 text-lg font-bold">Days</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item, index) => (
                        <tr key={index}>
                          <td className="px-1 py-2 border-b border-gray-200">
                            {item.data}
                          </td>
                          <td className="px-1 py-2 border-b border-gray-200">
                            {item.amount}
                          </td>
                          <td className="px-1 py-2 border-b border-gray-200">
                            {item.days}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* Glo Card */}
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div
                className="bg-[#1fa915] rounded-xl p-6 "
                style={{ borderRadius: "20px 70px 20px 20px" }}
              >
                <div className="flex flex-row justify-between items-center">
                  <img src={GLO} className="h-12 w-12 " />
                  <div></div>
                </div>
                <div className="container mx-auto  pt-6">
                  <table className="table-fixed w-full">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-1 py-2 text-lg font-bold">Data</th>
                        <th className="px-1 py-2 text-lg font-bold">Amount</th>
                        <th className="px-1 py-2 text-lg font-bold">Days</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item, index) => (
                        <tr key={index}>
                          <td className="px-1 py-2 border-b border-gray-200">
                            {item.data}
                          </td>
                          <td className="px-1 py-2 border-b border-gray-200">
                            {item.amount}
                          </td>
                          <td className="px-1 py-2 border-b border-gray-200">
                            {item.days}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* 9 Mobile */}
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div
                className="bg-[#D6E806] rounded-xl p-6 "
                style={{ borderRadius: "20px 70px 20px 20px" }}
              >
                <div className="flex flex-row justify-between items-center">
                  <img src={ETI} className="h-12 w-12 " />
                  <div></div>
                </div>
                <div className="container mx-auto  pt-6">
                  <table className="table-fixed w-full">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-1 py-2 text-lg font-bold">Data</th>
                        <th className="px-1 py-2 text-lg font-bold">Amount</th>
                        <th className="px-1 py-2 text-lg font-bold">Days</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item, index) => (
                        <tr key={index}>
                          <td className="px-1 py-2 border-b border-gray-200">
                            {item.data}
                          </td>
                          <td className="px-1 py-2 border-b border-gray-200">
                            {item.amount}
                          </td>
                          <td className="px-1 py-2 border-b border-gray-200">
                            {item.days}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Plan;
