import React from "react";
import { assets } from "../../../assets/img";
import { useContext } from "react";
import { MyContext } from "../../../ContextFolder/ContextApi";

const AddProduct = ({
    
}) => {
     const {handleisproductclose, handleisProduct} = useContext(MyContext)
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-[1000]">
      <div className="w-[340px] md:w-96 bg-white p-6 space-y-7 rounded-lg">
        <div className="flex items-center justify-between ">
          <h2 className="text-2xl font-medium">Add Product</h2>
          <img onClick={handleisproductclose} src={assets.closeX} alt="" />
        </div>
        <form action="" className="space-y-4">
          <input
            className="border-[1px] w-full px-4 py-4 rounded-lg text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            type="text"
            placeholder="Product Name"
          />
          <input
            className="font-normal border-[1px] w-full px-4 py-4 rounded-lg text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            type="text"
            placeholder="Description"
          />
        </form>
        <div className="p-2 w-full rounded-lg flex gap-4 items-center border-[1px] border-[#979797] border-dashed">
          <img src={assets.upload} alt="" />
          <div>
            <span>Upload Image</span>
            <p className="whitespace-nowrap md:text-sm text-[10px] text-[#000000B2]">
              Recommended size 400x100 (png, jpg)
            </p>
          </div>
        </div>
        <button onClick={ handleisProduct} className="bg-[#0c46d3] w-full  text-white rounded-lg px-7 py-3">
          Next
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
