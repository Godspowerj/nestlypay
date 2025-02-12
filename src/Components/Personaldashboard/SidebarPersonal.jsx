import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ togglesidebar ,handlesidebarclosing }) => {
  const navigationlink = ({ isActive }) => {
    return isActive ? "border-l-8 border-[#0C46D3] bg-[#E7EDFB]" : " ";
  };
  return (
    <>
        <div
          className={`fixed lg:sticky w-full lg:w-[500px] lg:top-0 md: lg:block left-0 h-screen bg-white z-50  overflow-auto scrollbar-hidden shadow-lg pt-10 transition-transform duration-500 ${
          togglesidebar ? "translate-y-0 " : "translate-y-[1000px] md:translate-y-[89.25rem] lg:translate-y-0"
        }`}>
          <nav onClick={handlesidebarclosing} className="mb-28" >
            <ul className="flex flex-col md:space-y-4 space-y-5">
              <NavLink to="" className={navigationlink}>
                <li className="flex items-center gap-4 text-[16px] text-[#494949] md:px-10 py-3 md:-ml-1 ml-7">
                  <img src="/home.png" />
                  Home
                </li>
              </NavLink>
              <p className="font-medium text-black/50 text-xs/6 pl-10">
                ACCOUNT
              </p>
              
              <NavLink to="activity" className={navigationlink}>
                <li className="flex items-center gap-4 text-[16px] text-[#494949] md:px-10 py-3 md:-ml-1 ml-7">
                  <img src="/activity.png" />
                  My Activities
                </li>
              </NavLink>
              <NavLink to="model" className={navigationlink}>
                <li className="flex items-center gap-4 text-[16px] text-[#494949] md:px-10 py-3 md:-ml-1 ml-7">
                  <img src="/clients.png" />
                  My Invoices
                </li>
              </NavLink>
              <p className="font-medium text-black/50 text-xs/6 pl-10">
                TRANSACTION
              </p>
              <NavLink to="*" className={navigationlink}>
                <li className="flex items-center gap-4 text-[16px] text-[#494949] md:px-10 py-3 md:-ml-1 ml-7">
                  <img src="/invoice.png" />
                  Invoice History
                </li>
              </NavLink>
              <NavLink to="clients" className={navigationlink}>
                <li className="flex items-center gap-4 text-[16px] text-[#494949] md:px-10 py-3 md:-ml-1 ml-7">
                  <img src="/clients.png" />
                  Clients
                </li>
              </NavLink>
              <NavLink to="*" className={navigationlink}>
                <li className="flex items-center gap-4 text-[16px] text-[#494949] md:px-10 py-3 md:-ml-1 ml-7">
                  <img src="/sub merchant.png" />
                  Payouts
                </li>
              </NavLink> 
            </ul>
          </nav>
        </div>
    </>
  );
};

export default Sidebar;

