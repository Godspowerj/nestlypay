import React from "react";
import { assets } from "../../assets/img";

const Model = () => {
  return (
    <div className="text-center w-full h-full md:pt-20 pt-32 place-items-center">
      <div className="flex flex-col items-center h-auto w-auto">
        <img
          className="w-32 "
          src={assets.notfound}
          alt=""
        />
        <h1 className="text-2xl">Oops! You don’t have any custom model yet.</h1>
        <p className="text-sm text-[#0C46D3]">Create one here.</p>
      </div>
    </div>
  );
};

export default Model;
