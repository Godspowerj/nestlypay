import React from "react";
import CompanyOverview from "./CompanyOverview";
import CustomDatePicker from "../../../Components/DatePicker";
import { NavLink, Outlet } from "react-router-dom";

const Setting = () => {
  return (
    <>
      <div>
        <h2 className="font-medium text-[20px] leading-10">
          Business Settings
        </h2>

        <ul className="flex items-center justify-between md:p-14 p-5 gap-5 overflow-auto scrollbar-hidden whitespace-nowrap lg:p-14 text-[16px] text-center ">
          <NavLink to=" ">
            <li className="bg-[#0C46D3] w-[183px] p-3 rounded-lg text-white ">
              Company Overview
            </li>
          </NavLink>

          <NavLink to="settingaccount">
            <li className="bg-[#0C46D305] w-[183px] p-3 rounded-lg">Account</li>
          </NavLink>

          <NavLink to="settingsecurity">
            <li className="bg-[#0C46D305] w-[183px] p-3 rounded-lg">
              Security
            </li>
          </NavLink>

          <NavLink to="settingpreference">
            <li className="bg-[#0C46D305] w-[183px] p-3 rounded-lg">
              Preference
            </li>
          </NavLink>
        </ul>
        <Outlet />
      </div>
    </>
  );
};

export default Setting;
