import { assets } from "../assets/img";
import { SidebarAuth } from "./SIdebarAuth";
import { useNavigate } from "react-router-dom";

export const MasterAuth = () => {
  const navigate = useNavigate();

  const signin = () => {
    navigate("/signin");
  };
  const createacct = () => {
    navigate("/createaccount");
  };
  return (
    <>
      {" "}
      {/* the top */}
      <div className="flex w-full h-full md:px-24 lg:flex justify-center">
        <SidebarAuth />
        {/* the buttom */}
        <div className="lg:px-16 bg-white/100 flex flex-col place-content-center overflow-hidden h-[calc(100vh-6.5rem)] px-5 sm:h-[calc(100vh-3rem)] lg:h-screen">
          <h2 className="text-[#0C46D3] text-2xl lg:hidden absolute top-0 pt-7">
            NESTLY PAY
          </h2>
          <div className="w-full  ">
            <h2 className="text-black/100 font-medium text-2xl/10">
              Choose your account type
            </h2>
            <p className="mt-1 text-[16px] leading-6 text-[#000000B2]">
              Get a downloadable receipts on every invoice payment as a
              reference to help your business in management and accounting.
            </p>
            <div className=" space-y-8 mt-12">
              <div
                onClick={signin}
                className="flex items-center gap-4 hover:border-[#0C46D3] rounded-xl border-[1.5px] border-transparent
               bg-white/100 shadow-[0px_5px_10px_0px_rgba(0,_0,_0,_0.05)] hover:shadow-none hover: hover:bg-[#0C46D31A] transition-colors duration-300 ease-in-out p-2"
              >
                <img
                  className="w-[3.6rem] h-[3.6rem] lg:w-12 lg:h-12"
                  src={assets.icon1}
                  alt=""
                />
                <div>
                  <h3>Business</h3>
                  <p className="text-[#000000B2]">
                    Create invoices as a business.
                  </p>
                </div>
              </div>

              <div
                onClick={createacct}
                className="flex  items-center gap-4 hover:border-[#0C46D3] rounded-xl border-[1.5px] border-transparent bg-white/100 shadow-[0px_5px_10px_0px_rgba(0,_0,_0,_0.05)]
               hover:shadow-none hover:bg-[#0C46D31A]  transition-colors duration-300 ease-in-out p-2 "
              >
                <img
                  className="w-[3.6rem] h-[3.6rem] lg:w-12 lg:h-12"
                  src={assets.icon2}
                  alt=""
                />
                <div>
                  <h3>Personal</h3>
                  <p className="text-[#000000B2]">
                    Create a one-time invoice as a freelancer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
