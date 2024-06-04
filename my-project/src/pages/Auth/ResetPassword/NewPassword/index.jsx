import React from "react";
import NewPasswordDesktop from "./NewPasswordDesktop";
import NewPasswordMobile from "./NewPasswordMobile";

const NewPassword = () => {
  return (
    <div>
      <div className="lg:block hidden">
        <NewPasswordDesktop />
      </div>
      <div className="lg:hidden block">
        <NewPasswordMobile />
      </div>
    </div>
  );
};

export default NewPassword;
