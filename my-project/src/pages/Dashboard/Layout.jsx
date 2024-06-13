import { Outlet, Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import home from "../../assets/home.png";
import airtime from "../../assets/airtime.png";
import Data from "../../assets/Data.png";
import Electricity from "../../assets/Electricity.png";
import Sub from "../../assets/Sub.png";
import Bank from "../../assets/Bank.png";
import Savings from "../../assets/Savings.png";
import Referral from "../../assets/Referral.png";
import Transaction from "../../assets/Transaction.png";
import Wallet from "../../assets/Wallet.png";
import logout from "../../assets/logout.png";
import NavbarMobile from "../../components/Dashboard/NavbarMobile";

const Layout = () => {
  const menus = [
    { name: "Dashboard", link: "/dashboard", iconSrc: home },
    {
      name: "Airtime",
      link: "/airtime",
      iconSrc: airtime,
    },
    { name: "Data", link: "/data", iconSrc: Data },
    {
      name: "Electricity",
      link: "/electricity",
      iconSrc: Electricity,
    },
    {
      name: "Tv Subscription",
      link: "/tvSubscription",
      iconSrc: Sub,
    },
    {
      name: "Bank Transfer",
      link: "/bankTransfer",
      iconSrc: Bank,
    },
    {
      name: "Target Savings",
      link: "/targetSavings",
      iconSrc: Savings,
    },
    { name: "Referrals", link: "/referrals", iconSrc: Referral, margin: true },
    { name: "Transactions", link: "/transactions", iconSrc: Transaction },
    { name: "Fund Wallet", link: "/fundWallet", iconSrc: Wallet },
    { name: "Logout", link: "/", iconSrc: logout },
    {
      name: "Become An Agent",
      link: "/becomeAnAgent",

      margin: true,
    },
  ];

  const [open, setOpen] = useState(true);
  const location = useLocation();

  return (
    <div className="lg:min-h-screen  h-full flex flex-row">
      <div
        className={`bg-[#151316]  min-h-screen lg:block hidden ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-2 flex flex-col gap-3 relative ">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm cursor-pointer gap-3.5 font-medium p-2  rounded-md
              ${
                menu.link === window.location.pathname
                  ? "bg-white text-[#242720]"
                  : ""
              }
              `}
            >
              {menu.name !== "Become An Agent" && (
                <img src={menu?.iconSrc} alt={menu?.name} className="w-6 h-6" />
              )}

              <h2
                style={{
                  transitionDelay: `${i + 1}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute z-40 left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
          {/* <Link>Become an Agent</Link> */}
        </div>
      </div>

      <div className="lg:min-h-screen h-full  w-full bg-[#f4eeee] ">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
