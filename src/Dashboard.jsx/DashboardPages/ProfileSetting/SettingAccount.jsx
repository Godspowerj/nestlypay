import React from "react";

const SettingAccount = () => {
  return (
    <>
      <div className="">
        <div className="md:w-[400px] lg:w-[400px] bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl">Banking Info</h2>
          <p className="text-sm text-[#000000B2]">
            The name on your bank account should be the same as the one you
            filled in to ensure easy validation.
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
            <button className="bg-[#0c46d3] w-full  text-white rounded-lg px-7 py-3">
              Next
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SettingAccount;
