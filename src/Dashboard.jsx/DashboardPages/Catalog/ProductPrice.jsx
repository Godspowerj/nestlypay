import React from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../../ContextFolder/ContextApi";
import { useContext } from "react";

const ProductPrice = () => {
    const {handleisProductclose} = useContext(MyContext)
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-[1000]">
      <div className="w-[340px] md:w-96 bg-white p-6 space-y-7 rounded-lg">
        <div className="">
          <h2 className="text-2xl font-medium">Pricing Information</h2>
        </div>
        <form action="" className="space-y-4 pb-5">
          <select className="font-normal border-[1px] w-full px-4 py-4 rounded-lg text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
            <option
              className="text-[#979797] text-sm"
              value=""
              disabled
              selected
            >
              Price Model
            </option>
            <option value=""></option>
          </select>
          <select className="w-full font-normal border-[1px] px-4 py-4 rounded-lg text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
            <option
              className="text-[#979797] text-sm"
              value=""
              disabled
              selected
            >
              Currency
            </option>
            <option value="">USD</option>
            <option value="">EUR</option>
          </select>
          <input
            className="font-normal border-[1px] w-full px-4 py-4 rounded-lg text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            type="text"
            placeholder="Amount"
          />
        </form>
        <Link to="/userdashboard/product">
          <button onClick={handleisProductclose} className="bg-[#0c46d3] w-full  text-white rounded-lg px-7 py-3">
            Add Product
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductPrice;
