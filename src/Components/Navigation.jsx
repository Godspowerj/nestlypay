import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <div className=" text-white w-full bg-[#0C46D3] text-center">
        <div className="max-w-7xl md:max-w-6xl flex items-center justify-between text-center mx-auto p-4">
          <img src="/public/LOGO.png" alt="" />
          

          <Link to="/auth"><p  className="border-2  border-white-500 px-9 py-3 rounded-lg cursor-pointer hover:bg-white hover:text-[#0C46D3] transition-all duration-500 ease-in-out">
          Sign in 
          </p></Link>
        </div>
      </div>
    </>
  );
};
