import { useRef, useState } from "react";

export default function EmailVerification() {
  const fieldsRef = useRef();
  const [state, setState] = useState({
    code1: "",
    code2: "",
    code3: "",
    code4: "",
  });

  // Switch to input fields method
  const inputFocus = (e) => {
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
        e.target.value != " " &&
        e.target.value != "" &&
        e.key.length == 1
      ) {
        elements[next].focus();
      }
    }
  };

  const handleChange = (e, codeNumber) => {
    const value = e.target.value;
    setState({ ...state, [codeNumber]: value.slice(value.length - 1) });
  };

  return (
    <div>
      <p className="text-center">
        Check your email and Click "Activate Account" to login
      </p>
      <div
        ref={fieldsRef}
        className="mt-8 flex items-center gap-x-10 lg:gap-x-12"
      >
        <input
          type="text"
          data-index="0"
          placeholder="*"
          value={state.code1}
          className="w-16 h-16 rounded-lg border focus:border-indigo-600 outline-none text-center text-2xl"
          onChange={(e) => handleChange(e, "code1")}
          onKeyUp={inputFocus}
        />
        <input
          type="text"
          data-index="1"
          placeholder="*"
          value={state.code2}
          className="w-16 h-16 rounded-lg border focus:border-indigo-600 outline-none text-center text-2xl"
          onChange={(e) => handleChange(e, "code2")}
          onKeyUp={inputFocus}
        />
        <input
          type="text"
          data-index="2"
          placeholder="*"
          value={state.code3}
          className="w-16 h-16 rounded-lg border focus:border-indigo-600 outline-none text-center text-2xl"
          onChange={(e) => handleChange(e, "code3")}
          onKeyUp={inputFocus}
        />
        <input
          type="text"
          data-index="3"
          placeholder="*"
          value={state.code4}
          className="w-16 h-16 rounded-lg border focus:border-indigo-600 outline-none text-center text-2xl"
          onChange={(e) => handleChange(e, "code4")}
          onKeyUp={inputFocus}
        />
      </div>
      <button className="w-full mt-8 px-6 py-2 bg-gradient-to-r from-[#9C3FE4] to-[#C65647] text-white rounded-lg">
        Confirm
      </button>
    </div>
  );
}
