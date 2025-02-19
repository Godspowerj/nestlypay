import React from "react";
import { useContext } from "react";
import { MyContext } from "../../ContextFolder/ContextApi";

const CancelPayment = () => {
  const {cancelPayment, SetcancelPayment} = useContext(MyContext)
   
  return (
    <>
      <div className="fixed inset-0 top-0 left-0 w-full h-full flex items-center justify-center bg-black/20 backdrop-blur-sm z-[1000]">
        <div className="bg-white p-6 rounded-xl shadow-md md:w-96 lg:w-96 w-[350px] space-y-4">
          <img className="w-70px" src="/cancel.png" alt="" />
          <h1 className="font-medium text-2xl ">Cancel Payment</h1>
          <p className="text-[#000000B2] text-sm ">
            Are you sure you didn’t recieve this payment? Once deleted, it can't
            be undone.
          </p>

          <div className="flex justify-between mt-6 text-sm">
            <button onClick={()=> SetcancelPayment (false)} className="text-[#979797] border-2 w-36 p-3 rounded-lg border-[#979797]">
              Cancel
            </button>
            <button className="text-white bg-[#FF3300] w-36 p-3  rounded-lg border-none">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CancelPayment;
