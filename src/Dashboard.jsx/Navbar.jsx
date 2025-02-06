import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ togglesidebar, Settogglesidebar }) => {
  const [notification, Setnotification] = useState(true);
  const [usernotification, Setusernotification] = useState(true);
  const navigationlink = ({ isActive }) => {
    return isActive ? "border-l-8 border-[#0C46D3] bg-[#E7EDFB]" : " ";
  };
  return (
    <div className="bg-white sticky top-0 z-50 px-4">
      <div className="flex justify-between items-center md:p-4  pt-3 pb-3">
        <img
          onClick={() =>Settogglesidebar(!togglesidebar)}
          
          className="lg:hidden block"
          src="./menu.png"
          alt=""
        />
        <div className="flex ">
          <div className="flex items-center  gap-3">
            <img
              src="/COMPANY LOGO.png"
              alt="Company Logo"
              className="w-[50px] hidden lg:block"
            />
            <div className="ml-2 hidden lg:block">
              <h2 className="text-[18px] leading-8 font-normal">Hype Agency</h2>
              <p className="text-sm text-gray-500">Growth and Marketing</p>
            </div>
          </div>

          <div className="hidden w-[600px] lg:block md:hidden">
            <div
              className="lg:flex grid-flow-col grid-row-2  h-full  py-4 px-4 ml-32 border border-gray-300 rounded-lg  focus:outline-none
             focus:ring-blue-500 focus:border-blue-500"
            >
              <input
                type="Search"
                id="Search"
                className="outline-none w-full h-full"
                placeholder="Search"
                required
              />

              <img src="./search.png" alt="" />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 ">
          <p className="text-[#E1981B] hidden lg:block md:hidden bg-[#E1981B1A] text-sm p-1 rounded-lg">
            Request pending
          </p>
          <img
            onClick={() => Setnotification(!notification)}
            src="./notification.png"
            alt=""
          />
          <img
            onClick={() => Setusernotification(!usernotification)}
            className="size-14 rounded-full"
            src="./profile.jpg"
            alt=""
          />
        </div>
      </div>

      <div
        className={`absolute right-12 -top-56 bg-[#FFFFFF] drop-shadow-lg  rounded-lg transition-all duration-100 ${
          usernotification ? "translate-y-0" : "translate-y-[300px]"
        }`}
      >
        <ul className="space-y-3 text-left w-[200px] py-3 flex flex-col ">
          <NavLink to="userprofile" className={navigationlink}>
            <li className="flex items-center ml-4 p-2 gap-4">
              <img src="./userCircle.png" alt="profile" />
              Profile
            </li>
          </NavLink>
          <NavLink to="setting" className={navigationlink}>
            <li className="flex items-center ml-4 p-2 gap-4">
              <img src="./userSetting.png" alt="setting" />
              Settings
            </li>
          </NavLink>
          <NavLink to="" className={navigationlink}>
            <li className="flex items-center ml-4 p-2 gap-4">
              <img src="./userCheck.png" alt="notification" />
              Verification
            </li>
          </NavLink>

          <p className="text-red-600 px-3">Sign Out</p>
        </ul>
      </div>

      {/* notification bell pop */}
      <div
        className={`absolute  flex md:right-12 right-1 -top-56 bg-[#FFFFFF] drop-shadow-lg px-6 py-5 rounded-lg transition-all duration-300 ${
          notification ? "translate-y-0" : "translate-y-[300px]"
        }`}
      >
        <div className="border-b flex pb-3">
          <div className="flex items-center gap-3">
            <div className="bg-green-800 flex items-center justify-center h-[50px] md:w-[50px] w-[90px] rounded-full ">
              <p className="text-center text-[17px] text-white ">N</p>
            </div>
            <div>
              <h2>Account Verification</h2>
              <p className="text-[#4D4D4DBF] text-[14px]">
                Hi Dominic! We have recieved your verification request.
              </p>
            </div>
          </div>
          <p className="text-sm">Today, 8:56pm</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
