import React from "react";
import LoginDesktop from "./LoginDesktop";
import LoginMobile from "./LoginMobile";

const Login = () => {
  return (
    <div>
      <div className="lg:block hidden">
        <LoginDesktop />
      </div>
      <div className="lg:hidden block">
        <LoginMobile />
      </div>
    </div>
  );
};

export default Login;
