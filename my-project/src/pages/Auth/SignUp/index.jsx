import React, { useState } from "react";
import SignUpDesktop from "./SignUpDesktop";
import SignUpMobile from "./SignUpMobile";

const SignUp = () => {
  return (
    <div>
      <div className="lg:block hidden">
        <SignUpDesktop />
      </div>
      <div className="lg:hidden block">
        <SignUpMobile />
      </div>
    </div>
  );
};

export default SignUp;
