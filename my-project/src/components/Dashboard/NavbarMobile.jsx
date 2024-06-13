import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";

const NavbarMobile = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-black flex flex-row items-center justify-between p-2 mb-2 lg:hidden">
      <div>
        <img src={logo} className="h-8 w-12 mt-2" alt="" />
      </div>
      <button
        className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setShowMenu(!showMenu)}
      >
        <IoMdMenu className="text-white text-3xl" />
      </button>

      {showMenu && (
        <div
          onClick={() => setShowMenu(false)}
          className="absolute z-10 block bg-white divide-y  top-[9%] right-[1%]  divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownMenuIconHorizontalButton"
          >
            <li>
              <Link
                to="/dashboard"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/airtime"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Airtime
              </Link>
            </li>
            <li>
              <Link
                to="/data"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Data
              </Link>
            </li>
            <li>
              <Link
                to="/electricity"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Electricity
              </Link>
            </li>
            <li>
              <Link
                to="/tvSubscription"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                TV Subscription
              </Link>
            </li>
            <li>
              <Link
                to="/bankTransfer"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Bank Transfer
              </Link>
            </li>{" "}
            <li>
              <Link
                to="/targetSavings"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Target Savings
              </Link>
            </li>
          </ul>
          <div className="py-2">
            <Link
              to="/referrals"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Refferals
            </Link>
            <Link
              to="/transactions"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Transactions
            </Link>
            <Link
              to="/fundWallet"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Fund Wallet
            </Link>
            <Link
              to="/"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              LogOut
            </Link>
          </div>

          <div className="py-2">
            <Link
              to="/becomeAnAgent"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Become An Agent
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarMobile;
