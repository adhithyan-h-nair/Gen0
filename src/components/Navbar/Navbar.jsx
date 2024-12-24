import React from "react";
import './Navbar.css';
const Navbar = () => {
  return (
    <div>
      <div className="container py-6 px-4 flex items-center">
        <div className="left py-3 px-3 mx-4 flex gap-8 border-2 border-solid border-purple-600 align-middle items-center w-fit  ">
          <div className="wrapper">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </div>
          <div className="text-purple-600 text-2xl font-bold">
            <span>GEN0</span>
          </div>
          <div className="text-white text-2xl font-semibold ">
            <span><a href="">HOME</a></span>
          </div>
        </div>
        <div className="get-started text-white absolute right-10">GET STARTED</div>
      </div>
    </div>
  );
};

export default Navbar;
