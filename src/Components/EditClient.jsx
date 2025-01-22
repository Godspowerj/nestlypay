import React from "react";
import { assets } from "../assets/img";

const EditClient = ({
  handleEditClientclose,
  title = "Edit Client",
  namePlaceholder = "Full Name",
  emailPlaceholder = "Email Address",
  phonePlaceholder = "Phone Number",
  cancelButtonText = "Cancel",
  updateButtonText = "Update",
}) => {
  return (
    <>
      <div className="fixed inset-0 top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 backdrop-blur-sm z-[1000]">
        <div className="flex flex-col bg-white w-[350px] md:w-[400px] space-y-7 rounded-xl p-6 md:p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl">{title}</h2>
            <img
              onClick={handleEditClientclose}
              src={assets.closeX}
              alt="Close"
            />
          </div>
          <form action="" className="space-y-3">
            <input
              className="border-[1px] w-full px-4 py-4 rounded-lg text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              type="text"
              placeholder={namePlaceholder}
            />
            <input
              className="border-[1px] w-full px-4 py-4 rounded-lg text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              type="text"
              placeholder={emailPlaceholder}
            />
            <input
              className="border-[1px] w-full px-4 py-4 rounded-lg text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              type="text"
              placeholder={phonePlaceholder}
            />
          </form>
          <div className="flex items-center justify-between">
            <button
              onClick={handleEditClientclose}
              className="text-[#0C46D3] border-[#0C46D3] border-2 rounded-xl px-7 py-3"
            >
              {cancelButtonText}
            </button>
            <button
              
              className="bg-[#0C46D3] text-white rounded-xl px-7 py-3"
            >
              {updateButtonText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditClient;
