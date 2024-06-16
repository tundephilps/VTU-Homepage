import React, { useState } from "react";
import { FaSearch, FaBell } from "react-icons/fa";
import Test1 from "../../assets/Test1.png";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoKeySharp } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { GoAlertFill } from "react-icons/go";
import { Modal } from "./Modals/Modal";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [showMenuBar, setShowMenuBar] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

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
    <div className="relative flex flex-row items-center justify-between ">
      <button
        className="lg:hidden block    font-bold rounded"
        onClick={() => setShowMenuBar(!showMenuBar)}
      >
        <IoMdMenu className="text-black text-3xl" />
      </button>

      {showMenuBar && (
        <div
          onClick={() => setShowMenu(false)}
          className="absolute z-10 block bg-white divide-y  top-12 left-[1%]  divide-gray-100 rounded-lg shadow w-44"
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
      <div
        onClick={() => setShowAlert(!showAlert)}
        className="p-2 bg-white rounded-full relative"
      >
        <span className="top-1 start-4 absolute w-2.5 h-2.5 bg-red-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
        <FaBell />
      </div>

      {showAlert && (
        <div
          onClick={() => setShowMenu(false)}
          className="absolute z-10 block bg-[#f4eeee] divide-y  top-[15%] left-[1%] lg:left-[6%]  lg:top-[10%] divide-gray-100 rounded-lg shadow w-80 lg:w-[50%] "
        >
          <ul
            className="py-2 divide-y-4 divide-white"
            aria-labelledby="user-menu-button"
          >
            <li>
              <a
                href="#"
                className="flex flex-row items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
              >
                <p> You Just Purchased 10GB Data for N2400 on 08034574154</p>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex flex-row items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
              >
                <p> You Just Deposited N2000 using bank Transfer</p>
              </a>
            </li>{" "}
            <li>
              <a
                href="#"
                className="flex flex-row items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
              >
                <p>
                  {" "}
                  You Just Purchased DSTV Subscription of 2months for N10,000
                </p>
              </a>
            </li>{" "}
            <li>
              <a
                href="#"
                className="flex flex-row items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
              >
                <p> You Just Purchased 4GB Data for N300 on 08055023154</p>
              </a>
            </li>
          </ul>
        </div>
      )}

      <div className="flex items-center md:space-x-4 border w-[60%] bg-white rounded-full">
        <button
          type="submit"
          title="Search"
          className="ml-4 focus:outline-none focus:ring"
        >
          <FaSearch className="text-gray-300" />
        </button>

        <input
          type="search"
          name="Search"
          placeholder="Search..."
          className="lg:w-full w-20 py-2 lg:pl-3 pl-0 text-sm bg-white rounded-md sm:w-auto focus:outline-none "
        />
      </div>

      <button
        onClick={() => setShowMenu(!showMenu)}
        type="button"
        className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open user menu</span>
        <img className="w-8 h-8 rounded-full" src={Test1} alt="user photo" />
      </button>
      {showMenu && (
        <div
          onClick={() => setShowMenu(false)}
          className="absolute z-10 block bg-[#f4eeee] divide-y  top-[15%] right-[1%]  divide-gray-100 rounded-lg shadow w-48 dark:bg-gray-700 dark:divide-gray-600"
        >
          <ul
            className="py-2 divide-y-4 divide-white"
            aria-labelledby="user-menu-button"
          >
            <li>
              <a
                onClick={() => handleOpenModal("Personal Information")}
                className="flex flex-row items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
              >
                <div className="rounded-full bg-gray-400 p-2">
                  <FaUser />
                </div>
                <p>Profile</p>
              </a>
            </li>
            <li>
              <a
                onClick={() => handleOpenModal("Change Password")}
                className="flex flex-row items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
              >
                <div className="rounded-full bg-gray-400 p-2">
                  <RiLockPasswordFill />
                </div>
                <p className="whitespace-nowrap"> Change Password</p>
              </a>
            </li>
            <li>
              <a
                onClick={() => handleOpenModal("Change Pin")}
                className="flex flex-row items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
              >
                <div className="rounded-full bg-gray-400 p-2">
                  <IoKeySharp />
                </div>
                <p>Change Pin</p>
              </a>
            </li>
            <li>
              <a
                onClick={() => handleOpenModal("Complain")}
                className="flex flex-row items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
              >
                <div className="rounded-full bg-gray-400 p-2">
                  <GoAlertFill />
                </div>
                <p>Complain</p>
              </a>
            </li>
            <li>
              <a
                onClick={() => handleOpenModal("signOut")}
                className="flex flex-row items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
              >
                <div className="rounded-full bg-gray-400 p-2">
                  <FaSignOutAlt />
                </div>
                <p>Sign Out</p>
              </a>
            </li>
          </ul>
        </div>
      )}

      <Modal show={showModal} onClose={handleCloseModal} formType={formType} />
    </div>
  );
};

export default Header;
