import React from "react";
import Avatar from "../../../assets/Test1.png";

const Profile = () => {
  const radios = ["Male", "Female"];
  return (
    <form>
      <div className="flex items-center justify-center  py-3">
        <img
          alt=""
          className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500"
          src={Avatar}
        />
      </div>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            First name
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            required
          />
        </div>
        <div>
          <label
            htmlFor="last_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Middle name
          </label>
          <input
            type="text"
            id="last_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Doe"
            required
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Surname
          </label>
          <input
            type="text"
            id="company"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Flowbite"
            required
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Username
          </label>
          <input
            type="text"
            id="company"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Flowbite"
            required
          />
        </div>
      </div>
      <div>
        <h2 className="text-gray-800 font-medium">Gender</h2>
        <ul className="mt-3 flex flex-row items-center gap-12">
          {/* Radio */}

          {/* Radio groups */}
          {radios.map((item, idx) => (
            <li key={idx} className="flex lg:flex-row items-center gap-x-2.5">
              <input
                type="radio"
                name="role"
                id={idx}
                className="form-radio border-gray-400 text-indigo-600 focus:ring-indigo-600 duration-150"
              />
              <label
                htmlhtmlFor={idx}
                className="text-sm text-gray-700 font-medium"
              >
                {item}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <label
          htmlFor="phone"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Phone number
        </label>
        <input
          type="tel"
          id="phone"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="123-45-678"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          required
        />
      </div>
      <div className="mb-6 mt-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Email address
        </label>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="john.doe@company.com"
          required
        />
      </div>

      <button
        type="submit"
        className="text-white flex lg:w-full bg-gradient-to-r from-[#9C3FE4] to-[#C65647] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mx-auto sm:w-auto px-5 py-2.5 text-center"
      >
        <p className="mx-auto">Save</p>
      </button>
    </form>
  );
};

export default Profile;
