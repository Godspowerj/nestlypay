import React from "react";
import { Link } from "react-router-dom";
import MyChart from "../../Components/MyChart";
import TableComponent from "../../Components/Tablecomponent";

const Home = () => {
  return (
    <>
      <div className="flex flex-col space-y-9 pb-20">
        <div className="md:flex block justify-between ">
          <div>
            <h1 className="text-2xl w-80 md:w-full ">
              Welcome to NestlyPay, Dominic 🎊
            </h1>
            <p className="text-sm">Here is your business overview</p>
          </div>

          <button className="bg-white/100 border-2 border-[#0C46D3] mt-7 md:mt-0 font-medium text-[#0C46D3] hover:bg-[#0C46D3] hover:text-white hover:border-white py-4 rounded-xl inline-block px-5 ">
            Create Invoice
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8  grid-cols-1 ">
          <div className=" bg-[#0C46D3]  text-white/100 rounded-xl px-8 py-10 flex flex-col place-content-center">
            <p>Completed Payments</p>
            <h1>₦131,900,092.00</h1>
          </div>
          <div className=" text-black/100 border-[1px] border-[#0000001A] rounded-xl px-8 py-10 flex flex-col place-content-center ">
            <p className="text-sm text-[#000000B2]">Unpaid Invoices</p>
            <h1>₦300,900,092.00</h1>
            <div className="text-[#FF0000B2] text-sm">
              - Decreased 9.4% today
            </div>
          </div>
          <div className=" text-black/100 border-[1px] border-[#0000001A] rounded-xl px-8 py-10 flex flex-col place-content-center ">
            <p className="text-sm text-[#000000B2]">Total Invoices</p>
            <h1>31,900</h1>
            <div className="text-[#27AE60B2] text-sm">
              + Increased 39.4% today
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center ">
          <p className="flex items-center font-bold text-[20px] gap-2">
            Statistics <img src="/alertcircle.png" alt="" />
          </p>
          <button className="border-[1px] px-10 py-3 bg-white rounded-lg">
            Pick a date
          </button>
        </div>

        <MyChart />
        <div className="flex items-center justify-between ">
          <p className="text-[18px]">Transaction History</p>
          <p className="text-[16px]">View All</p>
        </div>

        <TableComponent />
      </div>
    </>
  );
};

export default Home;
