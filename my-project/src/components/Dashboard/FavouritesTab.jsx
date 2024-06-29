import React, { useState } from "react";
import { Link } from "react-router-dom";
import Test1 from "../../assets/Test1.png";
import NA from "../../assets/NA.jpg";
const FavouritesTab = () => {
  const tabs = [
    {
      label: "Recents",
      content: (
        <div className="space-y-3 ">
          <div className="flex flex-row items-center gap-3">
            <img src={Test1} className="rounded-full" />
            <div>
              <p>Oni Abisola Grace</p>
              <p className="text-xs text-gray-500">bizstar@yahoo.com</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-3">
            <img src={Test1} className=" rounded-full" />
            <div>
              <p>Oni Abisola Grace</p>
              <p className="text-xs text-gray-500">bizstar@yahoo.com</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-3">
            <img src={Test1} className=" rounded-full" />
            <div>
              <p>Oni Abisola Grace</p>
              <p className="text-xs text-gray-500">bizstar@yahoo.com</p>
            </div>
          </div>{" "}
          <div className="flex flex-row items-center gap-3">
            <img src={Test1} className=" rounded-full" />
            <div>
              <p>Oni Abisola Grace</p>
              <p className="text-xs text-gray-500">bizstar@yahoo.com</p>
            </div>
          </div>{" "}
          <div className="flex flex-row items-center gap-3">
            <img src={Test1} className=" rounded-full" />
            <div>
              <p>Oni Abisola Grace</p>
              <p className="text-xs text-gray-500">bizstar@yahoo.com</p>
            </div>
          </div>{" "}
          <div className="flex flex-row items-center gap-3">
            <img src={Test1} className=" rounded-full" />
            <div>
              <p>Oni Abisola Grace</p>
              <p className="text-xs text-gray-500">bizstar@yahoo.com</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Favourites",
      content: (
        <div>
          <img src={NA} />
        </div>
      ),
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="bg-white h-[400px] lg:w-[50%] w-[100%] mt-8 overflow-scroll">
      <div className="p-4">
        <div className="flex flex-row justify-around">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`mr-4 px-4 py-2 text-gray-600 rounded ${
                activeTab === index ? "border-b-2 border-red-600" : ""
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="py-3 ">{tabs[activeTab].content}</div>
      </div>
    </div>
  );
};

export default FavouritesTab;
