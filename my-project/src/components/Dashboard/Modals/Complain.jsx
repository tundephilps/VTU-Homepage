import React, { useState } from "react";
import { VscAdd } from "react-icons/vsc";

const Complain = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };
  return (
    <div className="">
      <div className="relative w-full mb-3">
        <label className="block text-xs mb-2 font-medium">Complain Type</label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-3 bottom-0 w-5 h-5 my-auto text-gray-400 right-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        <select className="w-full px-3 py-2.5 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2">
          <option selected>Select Complain Type</option>
          <option>Sucessful but receiver didnt get the Data</option>
          <option>Failed but money was deducted without refunds</option>
          <option>Pending</option>
          <option>Data was transfered to wrong Number</option>
          <option>Money Transferred but not credited to the wallet</option>
          <option>Others</option>
        </select>
      </div>
      <div class="mb-3">
        <label
          for="default-input"
          class="block mb-2 text-xs font-medium text-gray-900"
        >
          Transaction ID
        </label>
        <input
          type="text"
          id="default-input"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter transaction ID"
        />
      </div>
      <div className="mb-3">
        <label
          for="message"
          class="block mb-2 text-xs font-medium text-gray-900 dark:text-white"
        >
          Complain Description
        </label>
        <textarea
          id="message"
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Please describe your complain here about the transaction...."
        ></textarea>
      </div>
      <div>
        <p className="text-sm">Attachment</p>
        <p class="block mb-2 text-xs font-medium text-gray-400">
          Please add any prove of your complain if any to help us solve the
          problem more quickly.
        </p>
        <label
          htmlFor="dropzone-file"
          className=" mx-auto border-dashed border-2 border-[#e3caca] rounded-3xl h-[100px] w-full flex items-center justify-center"
        >
          <VscAdd className="h-12 w-12 text-[#c65647]" />
        </label>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
        {file && (
          <div className="mt-4 text-xs">
            <ul>
              <li>File Name: {file.name}</li>
              <li>File Size: {file.size} bytes</li>
              <li>File Type: {file.type}</li>
            </ul>
          </div>
        )}
      </div>
      <button className="w-full mt-8 px-6 py-2 bg-gradient-to-r from-[#9C3FE4] to-[#C65647] text-white rounded-lg">
        Submit
      </button>
    </div>
  );
};

export default Complain;
