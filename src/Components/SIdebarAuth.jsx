import { assets } from "../assets/img";

export const SidebarAuth = () => {
  return(
  <>
    <div className="hidden md:hidden h-[100vh] md:justify-center  bg-[#0C46D3]  text-white bg-brand-blue lg:pl-24 lg:pr-28 lg:flex flex-col justify-around">
      <div>
        <p className="  leading-[40px] tracking-widest font-medium text-2xl inline-flex items-center gap-4 text-white/100 mt-8">
          NESTLY PAY
        </p>
        <div className=" align-center flex flex-col justify-center h-[80vh] gap-4">
          <p className="text-3xl font-medium tracking-wide">
            Start taking steps to manage your business now.
          </p>
          <div className="flex items-center gap-3">
            <img src={assets.faces} alt="" />
            <span className="text-sm text-white/100">Join 1,893 People.</span>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};
