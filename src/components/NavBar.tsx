import React from "react";

const NavBar = () => {
  return (
    <div className="h-[171px] bg-[#131514] flex justify-between">
      <div className="text-white flex items-center h-[100%]">
        <div className="mr-[56px]">
          <img
            className="w-[196px] h-[94px]"
            src="./images/FliqaIndia_logo.png"
            alt=""
          />
        </div>
        <div className="mr-[46px]">Home</div>
        <div className="mr-[46px]">Service</div>
        <div className="mr-[46px]">Portfolio</div>
        <div className="mr-[46px]">Community</div>
        <div className="mr-[46px]">Blog</div>
      </div>
      <div className="text-white flex">
        <button className="mr-[33px]">Sign Up</button>
        <button className="mr-[59px]">Sign in</button>
      </div>
    </div>
  );
};

export default NavBar;
