import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { assets } from "../../../assets/img";
import AddProduct from "./AddProduct";
import { MyContext } from "../../../ContextFolder/ContextApi";
import { useContext } from "react";
import ProductPrice from "./ProductPrice";
const Catalog = () => {
  const {isAddProduct,handleisproductopen,isProduct} = useContext(MyContext)
  return (
    <>
      <div className="pt-32 md:pt-28 text-center flex flex-col items-center space-y-5 justify-center">
        <img className="w-[150px]" src={assets.modelimg} alt="" />
         <p>Create a catalogue, send product and services to your customers </p>
         <button onClick={handleisproductopen} className="border-[#0C46D3] text-[#0C46D3] border-2 px-10 py-4 rounded-lg bg-white">Add Product</button>
      </div>
      {isAddProduct && <AddProduct/>}
      
      {isProduct && <ProductPrice/>}
      
    </>
  );
};

export default Catalog;
