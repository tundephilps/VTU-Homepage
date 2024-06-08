import React from "react";
import MTN from "../../assets/MTN.png";

import GLO from "../../assets/GLO.png";
import AIRTEL from "../../assets/AIRTEL.png";
import ETI from "../../assets/ETI.png";

const Companies = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 z-[10px]">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="grid grid-cols-2 gap-6 rounded-lg p-6 sm:h-40 sm:content-evenly md:grid-cols-4">
          <div className="flex justify-center text-indigo-500">
            <img src={MTN} />
          </div>
          <div className="flex justify-center text-indigo-500">
            <img src={GLO} />
          </div>
          <div className="flex justify-center text-indigo-500">
            <img src={AIRTEL} />
          </div>
          <div className="flex justify-center text-indigo-500">
            <img src={ETI} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
