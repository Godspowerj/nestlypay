import React from "react";
import { assets } from "../assets/img";
import { useContext } from "react";
import { MyContext } from "../ContextFolder/ContextApi";

const AddClients = ({
  title = "Add Client",
  placeholder1 = "Full Name",
  placeholder2 = "Email Address",
  placeholder3 = "Phone Number",
  button = "Add Client",
}) => {
  const { addclients, Setaddclients, handleaddClientclose } =
    useContext(MyContext);
  return (
    <>
      <div className="fixed inset-0 top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 backdrop-blur-sm z-[1000]">
        <div className="flex flex-col bg-white w-[350px] md:w-[400px] space-y-7 rounded-xl p-6 md:p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl">{title}</h2>
            <img
              onClick={handleaddClientclose}
              src={assets.closeX}
              alt="Close"
            />
          </div>
          <form action="" className="space-y-3">
            <input
              className="border-[1px] w-full px-4 py-4 rounded-lg text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              type="text"
              placeholder={placeholder1}
            />
            <input
              className="border-[1px] w-full px-4 py-4 rounded-lg text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              type="text"
              placeholder={placeholder2}
            />
            <input
              className="border-[1px] w-full px-4 py-4 rounded-lg text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              type="text"
              placeholder={placeholder3}
            />
          </form>
          <div className="flex  items-center justify-between">
            <button  className="bg-[#0c46d3] w-full  text-white rounded-lg px-7 py-3">
              {button}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddClients;
