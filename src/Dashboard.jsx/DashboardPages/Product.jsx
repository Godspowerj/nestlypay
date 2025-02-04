import React from "react";
import { assets } from "../../assets/img";
import { MyContext } from "../../ContextFolder/ContextApi";
import { useContext } from "react";
import AddProduct from "./Catalog/AddProduct";
import ProductPrice from "./Catalog/ProductPrice";
import DeleteConfirmation from "../../Components/DeleteConfirmation";
const Product = () => {
  const { isAddProduct, isProduct, handleisproductopen,handleDeleteCancelopen,
    handleDeleteCancel } =
    useContext(MyContext);
  const productItems = [
    {
      ProductName: "Plantain Chips",
      Description: "Helps in gaining weight",
      Price: "₦ 600.00",
    },
  ];
  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="md:text-2xl font-medium">Products</h2>
          <button  onClick={handleisproductopen} className="border-2 text-[#0C46D3] border-[#0C46D3] bg-white py-4 px-4 md:px-5 rounded-xl">
            Add Product
          </button>
        </div>

        {productItems.map((productItems, index) => (
          <div className="flex items-center justify-between">
            <div className="block md:flex items-center gap-4">
              <img
                className="bg-[#FFB8001A] w-[150px]"
                src={assets.productitem}
                alt=""
              />
              <div>
                <span className="text-[20px] font-normal text-[#000000CC]">
                  {productItems.ProductName}
                </span>
                <p className="mb-5 font-normal text-[16px] text-[#000000CC]">
                  {productItems.Description}
                </p>
                <p className=" text-sm text-[#7AB255] bg-[#7AB2551A] inline p-3 rounded-lg ">
                  {productItems.Price}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img onClick={handleisproductopen} src={assets.editicon} alt="" />
              <img onClick={handleDeleteCancelopen} src={assets.deleteicon} alt="" />
            </div>
          </div>
        ))}
      </div>{" "}
      {isAddProduct && <AddProduct />}
      {isProduct && <ProductPrice />}
      { handleDeleteCancel && <DeleteConfirmation message="Are you sure you want to delete this product? Once deleted, it can't be undone." />}
      
    </>
  );
};

export default Product;
