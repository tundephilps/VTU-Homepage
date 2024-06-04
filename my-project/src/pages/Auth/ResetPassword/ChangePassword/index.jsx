import React from "react";
import ChangePasswordDesktop from "./ChangePasswordDesktop";
import ChangePasswordMobile from "./ChangePasswordMobile";

const ChangePassword = () => {
  return (
    <div>
      <div className="lg:block hidden">
        <ChangePasswordDesktop />
      </div>
      <div className="lg:hidden block">
        <ChangePasswordMobile />
      </div>
    </div>
  );
};

export default ChangePassword;
