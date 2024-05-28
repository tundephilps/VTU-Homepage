import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export const Contact = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(true);

  const handleChange = (value) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;

    return phoneNumberPattern.test(phoneNumber);
  };
  return (
    <main className="py-14 bg-white " id="ContactUs">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8 ">
        <p className="text-black font-semibold text-6xl lg:w-[40%] w-full ">
          Get in touch for enquiry today.
        </p>
        <div className="max-w-lg mx-auto gap-12 flex-row lg:flex lg:max-w-none">
          <div className="flex-1 mt-12 sm:max-w-lg lg:w-[50%]">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div>
                <label className="font-medium">Full name</label>
                <input
                  type="text"
                  required
                  className="bg-gray-300 w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  placeholder="Enter full name"
                />
              </div>
              <div>
                <label className="font-medium">
                  Email address{" "}
                  <span className="text-gray-300 text-sm">
                    (Ensure the email is reachable)
                  </span>
                </label>
                <input
                  placeholder="Enter Email address"
                  type="email"
                  required
                  className="bg-gray-300 w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">
                  Mobile Number
                  <span className="text-gray-300 text-sm">
                    (Ensure the number is reachable)
                  </span>
                </label>
                {/* <input
                  type="text"
                  required
                  className="bg-gray-300 w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                /> */}
                <PhoneInput
                  defaultCountry={"ni"}
                  className="bg-gray-300 w-full mt-2 px-3 py-1 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  country={"in"}
                  value={phoneNumber}
                  onChange={handleChange}
                  inputProps={{
                    required: true,
                  }}
                  buttonStyle={{
                    background: "none",
                    outline: "none",
                    borderLeft: "3px",
                    borderLeftWidth: "3px",
                    borderLeftColor: "red",
                  }}
                  inputStyle={{
                    background: "none",
                    outline: "none",
                    border: "none",
                  }}
                />
                {!valid && <p>Please enter a valid phone number.</p>}
              </div>
            </form>
          </div>
          <div className=" space-y-3 lg:w-[50%]">
            <p className="text-white text-[2px] font-semibold sm:text-4xl">.</p>
            <div>
              <label className="font-medium">Message</label>
              <textarea
                placeholder="Please enter your message here"
                required
                className=" bg-gray-300 w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              ></textarea>
            </div>
          </div>
        </div>

        <div className="h-14" />
        <button className="w-full px-4 py-2 text-white font-medium bg-[#247fff] hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
          Submit
        </button>
      </div>
    </main>
  );
};
