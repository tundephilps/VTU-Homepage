import sidebarData from "../../data/sidebarData";
import {
  NavLink,
  Outlet,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
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

const Layout = () => {
  const menus = [
    { name: "Dashboard", link: "/Dashboard", iconSrc: home },
    {
      name: "Airtime",
      link: "/Airtime",
      iconSrc: airtime,
    },
    { name: "Data", link: "/Data", iconSrc: Data },
    {
      name: "Electricity",
      link: "/Electricity",
      iconSrc: Electricity,
    },
    {
      name: "Tv Subscription",
      link: "/TVSubscription",
      iconSrc: Sub,
    },
    {
      name: "Bank Transfer",
      link: "/BankTransfer",
      iconSrc: Bank,
    },
    {
      name: "Target Savings",
      link: "/TargetSavings",
      iconSrc: Savings,
    },
    { name: "Referrals", link: "/Referrals", iconSrc: Referral, margin: true },
    { name: "Transactions", link: "/Transactions", iconSrc: Transaction },
    { name: "Fund Wallet", link: "/FundWallet", iconSrc: Wallet },
    { name: "Logout", link: "/", iconSrc: logout },
    {
      name: "Become An Agent",
      link: "/BecomeAnAgent",

      margin: true,
    },
  ];

  const [open, setOpen] = useState(true);
  const location = useLocation();

  return (
    <div className="h-[100vh] flex flex-row">
      <div
        className={`bg-[#151316] min-h-screen ${
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
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
          {/* <Link>Become an Agent</Link> */}
        </div>
      </div>
      <div className=" h-[100vh] w-full bg-[#f4eee] ">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
