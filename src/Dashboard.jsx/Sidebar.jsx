import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navigationlink = ({ isActive }) => {
    return isActive ? "border-l-8 border-[#0C46D3] bg-[#E7EDFB]" : " ";
  };
  return (
    <div className=" h-screen pt-10  overflow-auto scrollbar-hidden">
      <nav className="">
        <ul className="flex flex-col md:space-y-4">
          <NavLink to="" className={navigationlink}>
            <li className="flex text-black items-center gap-4 text-[16px] md:px-10 py-3 md:-ml-1">
              <img src="./home.png"  />
              Home
            </li>
          </NavLink>
          <p className="font-medium text-black/50 text-xs/6 pl-10">ACCOUNT</p>
          <NavLink to="model" className={navigationlink}>
            <li className="flex items-center gap-4 text-[16px] md:px-10 py-3 md:-ml-1">
              <img src="./models.png" />
              My Models
            </li>
          </NavLink>
          <NavLink to="activity" className={navigationlink}>
            <li className="flex items-center gap-4 text-[16px] md:px-10 py-3 md:-ml-1">
              <img src="./activity.png" />
              My Activities
            </li>
          </NavLink>
          <p className="font-medium text-black/50 text-xs/6 pl-10">TRANSACTION</p>
          <NavLink to="invoice" className={navigationlink}>
            <li className="flex items-center gap-4 text-[16px] md:px-10 py-3 md:-ml-1">
              <img src="./invoice.png"  />
              Invoice History
            </li>
          </NavLink>
          <NavLink to="clients" className={navigationlink}>
            <li className="flex items-center gap-4 text-[16px] md:px-10 py-3 md:-ml-1">
              <img src="./clients.png"  />
              Clients
            </li>
          </NavLink>
          <p className="font-medium text-black/50 text-xs/6 pl-10">HISTORY</p>
          <NavLink to="*" className={navigationlink}>
            <li className="flex items-center gap-4 text-[16px] md:px-10 py-3 md:-ml-1">
              <img src="./sub merchant.png"  />
              Sub Merchant
            </li>
          </NavLink>
          <NavLink to="*" className={navigationlink}>
            <li className="flex items-center gap-4 text-[16px] md:px-10 py-3 md:-ml-1">
              <img src="./catalog.png"  />
              Catalog
            </li>
          </NavLink>
          <NavLink to="*" className={navigationlink}>
            <li className="flex items-center gap-4 text-[16px] md:px-10 py-3 md:-ml-1">
              <img src="./draft.png"  />
              Draft
            </li>
          </NavLink>
        
          
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
