import { useRef, useState } from "react";

export default function ChangePin() {
  const fieldsRef1 = useRef();
  const fieldsRef2 = useRef();
  const [otp1, setOtp1] = useState({
    code1: "",
    code2: "",
    code3: "",
    code4: "",
  });
  const [otp2, setOtp2] = useState({
    code1: "",
    code2: "",
    code3: "",
    code4: "",
  });
  const [message, setMessage] = useState("");

  const inputFocus = (e, fieldsRef) => {
    const elements = fieldsRef.current.children;
    const dataIndex = +e.target.getAttribute("data-index");
    if (e.key === "Delete" || e.key === "Backspace") {
      const next = dataIndex - 1;
      if (next > -1) {
        elements[next].focus();
      }
    } else {
      const next = dataIndex + 1;
      if (
        next < elements.length &&
        e.target.value !== " " &&
        e.target.value !== "" &&
        e.key.length === 1
      ) {
        elements[next].focus();
      }
    }
  };

  const handleChange = (e, codeNumber, otp, setOtp) => {
    const value = e.target.value;
    setOtp({ ...otp, [codeNumber]: value.slice(value.length - 1) });
  };

  const handleVerify = () => {
    const code1 = `${otp1.code1}${otp1.code2}${otp1.code3}${otp1.code4}`;
    const code2 = `${otp2.code1}${otp2.code2}${otp2.code3}${otp2.code4}`;
    if (code1 === code2) {
      setMessage("OTP Verified Successfully!");
    } else {
      setMessage("The OTP codes do not match. Please try again.");
    }
  };

  return (
    <div className="space-y-6 flex flex-col w-full mx-auto">
      <div className="w-full">
        <label className="text-gray-600">New Pin</label>
        <div ref={fieldsRef1} className="mt-2 flex items-center gap-x-12">
          <input
            type="text"
            data-index="0"
            placeholder="*"
            value={otp1.code1}
            className="w-16 h-16 rounded-lg border focus:border-indigo-600 outline-none text-center text-2xl"
            onChange={(e) => handleChange(e, "code1", otp1, setOtp1)}
            onKeyUp={(e) => inputFocus(e, fieldsRef1)}
          />
          <input
            type="text"
            data-index="1"
            placeholder="*"
            value={otp1.code2}
            className="w-16 h-16 rounded-lg border focus:border-indigo-600 outline-none text-center text-2xl"
            onChange={(e) => handleChange(e, "code2", otp1, setOtp1)}
            onKeyUp={(e) => inputFocus(e, fieldsRef1)}
          />
          <input
            type="text"
            data-index="2"
            placeholder="*"
            value={otp1.code3}
            className="w-16 h-16 rounded-lg border focus:border-indigo-600 outline-none text-center text-2xl"
            onChange={(e) => handleChange(e, "code3", otp1, setOtp1)}
            onKeyUp={(e) => inputFocus(e, fieldsRef1)}
          />
          <input
            type="text"
            data-index="3"
            placeholder="*"
            value={otp1.code4}
            className="w-16 h-16 rounded-lg border focus:border-indigo-600 outline-none text-center text-2xl"
            onChange={(e) => handleChange(e, "code4", otp1, setOtp1)}
            onKeyUp={(e) => inputFocus(e, fieldsRef1)}
          />
        </div>
      </div>
      <div className="w-full">
        <label className="text-gray-600 mt-4">Confirm New Pin</label>
        <div ref={fieldsRef2} className="mt-2 flex items-center gap-x-12">
          <input
            type="text"
            data-index="0"
            placeholder="*"
            value={otp2.code1}
            className="w-16 h-16 rounded-lg border focus:border-indigo-600 outline-none text-center text-2xl"
            onChange={(e) => handleChange(e, "code1", otp2, setOtp2)}
            onKeyUp={(e) => inputFocus(e, fieldsRef2)}
          />
          <input
            type="text"
            data-index="1"
            placeholder="*"
            value={otp2.code2}
            className="w-16 h-16 rounded-lg border focus:border-indigo-600 outline-none text-center text-2xl"
            onChange={(e) => handleChange(e, "code2", otp2, setOtp2)}
            onKeyUp={(e) => inputFocus(e, fieldsRef2)}
          />
          <input
            type="text"
            data-index="2"
            placeholder="*"
            value={otp2.code3}
            className="w-16 h-16 rounded-lg border focus:border-indigo-600 outline-none text-center text-2xl"
            onChange={(e) => handleChange(e, "code3", otp2, setOtp2)}
            onKeyUp={(e) => inputFocus(e, fieldsRef2)}
          />
          <input
            type="text"
            data-index="3"
            placeholder="*"
            value={otp2.code4}
            className="w-16 h-16 rounded-lg border focus:border-indigo-600 outline-none text-center text-2xl"
            onChange={(e) => handleChange(e, "code4", otp2, setOtp2)}
            onKeyUp={(e) => inputFocus(e, fieldsRef2)}
          />
        </div>
      </div>
      <button
        onClick={handleVerify}
        className="mt-8 px-6 py-2 bg-gradient-to-r from-[#9C3FE4] to-[#C65647] text-white rounded-lg"
      >
        Change Pin
      </button>
      {message && <p className="mt-2 text-red-500">{message}</p>}
    </div>
  );
}
