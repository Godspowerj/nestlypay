import React from "react";
import { assets } from "../../../assets/img";
const CompanyOverview = () => {
  return (
    <>
      <div className="md:flex lg:flex pb-20 block  space-y-6 gap-10 ">
        {/* buisness Information */}
        <div className="space-y-3 md:w-[400px] lg:w-[400px] bg-white p-5 rounded-lg shadow-lg">
          <h2 className="text-2xl">Business Information</h2>
          <p className="text-[#000000B2] text-sm">
            Provide your business name, business mail and company website.
          </p>
          <form action="" className="space-y-3">
            <input
              className="border-[ 1.2px] border-[#979797] w-full px-4 py-4 rounded-lg text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              type="text"
              placeholder="Company Name"
            />
            <input
              className="border-[ 1.2px] border-[#979797] w-full px-4 py-4 rounded-lg text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              type="text"
              placeholder="Company Email"
            />
            <input
              className="border-[ 1.2px] border-[#979797] w-full px-4 py-4 rounded-lg text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              type="text"
              placeholder="Website (Optional)"
            />
            <div className="p-2 w-full rounded-lg flex gap-4 items-center border-[1px] border-[#979797] border-dashed">
              <img src={assets.upload} alt="" />
              <div>
                <span>Upload Image</span>
                <p className="whitespace-nowrap md:text-sm text-[10px] text-[#000000B2]">
                  Recommended size 400x100 (png, jpg)
                </p>
              </div>
            </div>
            <button className="bg-[#0c46d3] w-full  text-white rounded-lg px-7 py-3">
              Next
            </button>
          </form>
        </div>

        {/* contact Information */}
        <div className="bg-white p-5 shadow-lg h-[379px] space-y-3 rounded-xl">
          <div>
            <h2 className="text-2xl">Contact Information</h2>
            <p className="text-sm text-[#000000B2]">
              Provide your business/company address
            </p>
          </div>
          <form action="" className="space-y-2">
            <input
              className="border-[ 1.2px] border-[#979797] w-full px-4 py-4 rounded-lg text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              type="text"
              placeholder="Address One"
            />
            <input
              className="border-[ 1.2px] border-[#979797] w-full px-4 py-4 rounded-lg text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              type="text"
              placeholder="Address Two"
            />
            <div className="flex">
              <input
                className="border-[ 1.2px] border-[#979797] w-full px-4 py-4 rounded-lg text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                type="text"
                placeholder="Address One"
              />
              <input
                className="border-[ 1.2px] border-[#979797] w-full px-4 py-4 rounded-lg text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                type="text"
                placeholder="Address Two"
              />
            </div>
            <div className="flex">
              <input
                className="border-[ 1.2px] border-[#979797] w-full px-4 py-4 rounded-lg text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                type="text"
                placeholder="Address One"
              />
              <input
                className="border-[ 1.2px] border-[#979797] w-full px-4 py-4 rounded-lg text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                type="text"
                placeholder="Address Two"
              />
            </div>

            <button className="bg-[#0c46d3] w-full  text-white rounded-lg px-7 py-3">
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CompanyOverview;
