import React, { useState } from "react";

const DataPlan = () => {
  const tabs = [
    {
      label: "Best Offer",
      content: (
        <div className="flex flex-wrap gap-4">
          <div className="bg-white p-6 text-center rounded-md">
            <h1>500MB for N110</h1>
          </div>
          <div className="bg-white p-6 text-center rounded-md">
            <h1>1GB for N215</h1>
          </div>
          <div className="bg-white p-6 text-center rounded-md">
            <h1>2GB for N430</h1>
          </div>
          <div className="bg-white p-6 text-center rounded-md">
            <h1>6GB for N465</h1>
          </div>
          <div className="bg-white p-6 text-center rounded-md">
            <h1>7GB for N1500</h1>
          </div>
          <div className="bg-white p-6 text-center rounded-md">
            <h1>8GB for N1700</h1>
          </div>
          <div className="bg-white p-6 text-center rounded-md">
            <h1>10GB for N2100</h1>
          </div>
          <div className="bg-white p-6 text-center rounded-md">
            <h1>12GB for N2500</h1>
          </div>
        </div>
      ),
    },
    {
      label: "Daily",
      content: (
        <div className="flex flex-wrap gap-4">
          <div className="bg-white p-6 text-center rounded-md">
            <h1>2GB for N430</h1>
          </div>
          <div className="bg-white p-6 text-center rounded-md">
            <h1>6GB for N465</h1>
          </div>
        </div>
      ),
    },
    {
      label: "Weekly",
      content: (
        <div className="flex flex-wrap gap-4">
          <div className="bg-white p-6 text-center rounded-md">
            <h1>7GB for N1500</h1>
          </div>
          <div className="bg-white p-6 text-center rounded-md">
            <h1>8GB for N1700</h1>
          </div>
        </div>
      ),
    },
    {
      label: "Monthly",
      content: (
        <div className="flex flex-wrap gap-4">
          <div className="bg-white p-6 text-center rounded-md">
            <h1>10GB for N2100</h1>
          </div>
          <div className="bg-white p-6 text-center rounded-md">
            <h1>12GB for N2500</h1>
          </div>
        </div>
      ),
    },
    {
      label: "Mega",
      content: (
        <div className="flex flex-wrap gap-4">
          <div className="bg-white p-6 text-center rounded-md">
            <h1>500MB for N110</h1>
          </div>
          <div className="bg-white p-6 text-center rounded-md">
            <h1>1GB for N215</h1>
          </div>
        </div>
      ),
    },
    {
      label: "Day & Night",
      content: (
        <div className="flex flex-wrap gap-4">
          <div className="bg-white p-6 text-center rounded-md">
            <h1>30GB for N6000</h1>
          </div>
          <div className="bg-white p-6 text-center rounded-md">
            <h1>35GB for N7000</h1>
          </div>
        </div>
      ),
    },
    {
      label: "SME Data",
      content: (
        <div className="flex flex-wrap gap-4">
          <div className="bg-white p-6 text-center rounded-md">
            <h1>40GB for N8600</h1>
          </div>
          <div className="bg-white p-6 text-center rounded-md">
            <h1>50GB for N10750</h1>
          </div>
        </div>
      ),
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="container mx-auto mt-4">
      <div>
        <div className="flex mb-4 flex-wrap">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`mr-4 px-4 py-2 text-gray-600 rounded ${
                activeTab === index
                  ? "bg-gradient-to-r from-[#9C3FE4] to-[#C65647] rounded-full text-white"
                  : ""
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div>{tabs[activeTab].content}</div>
      </div>
    </div>
  );
};

export default DataPlan;
