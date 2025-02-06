import { useNavigate } from "react-router-dom";
import { SidebarAuth } from "../SIdebarAuth";

export const Businessinfo = () => {
  const navigate = useNavigate();

  const Signin = () => {
    navigate("/signin");
   }
   const tolaststep = ()=>{
    navigate("/laststep")
   }

  return (
    <>
      <div className="flex w-full h-full">
        <div className="w-full hidden lg:block">
          <SidebarAuth />
        </div>

        <div className="w-full relative h-screen  bg-white/100 flex flex-col place-content-center sm:h-[calc(100vh-3rem)] ">
          <div className="flex-none sticky top-0  h-full flex-grow pt-20 pb-10 pl-5 pr-5 md:pt- md:pl-24 md:pr-24 overflow-y-scroll snap-mandatory snap-y">
            <h2 className="md:text-[36px] text-[24px] text-[#000000] leading-10">
              Business Information
            </h2>
            <p className="text-[16px] text-[#000000B2]">
              Provide your business name, business mail and company address.
            </p>

            <form action="" className="pt-3 space-y-5 ">
              <input
                type="name"
                id="name"
                className="mt-1 block w-full text-[16px] opacity-[700%] tracking-normal leading-6 px-4 py-4 
                  border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500
                   focus:border-blue-500 "
                placeholder="Company Name"
                required
              />
              <input
                type="Password"
                id="Password"
                className="mt-1 block w-full  px-4 py-4  border border-gray-300 rounded-lg shadow-sm focus:outline-none
                   focus:ring-blue-500 focus:border-blue-500"
                placeholder="Company Email"
                required
              />
              <input
                type="name"
                id="name"
                className="mt-1 block w-full text-[16px] opacity-[700%] tracking-normal leading-6 px-4 py-4 
                  border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500
                   focus:border-blue-500 "
                placeholder="Address One"
                required
              />
              <input
                type="Password"
                id="Password"
                className="mt-1 block w-full  px-4 py-4  border border-gray-300 rounded-lg shadow-sm focus:outline-none
                   focus:ring-blue-500 focus:border-blue-500"
                placeholder="Address Two"
                required
              />
              <div className="space-y-4">
                <div className="flex gap-4 ">
                  <input
                    type="name"
                    id="name"
                    className="mt-1 block w-full text-[16px] opacity-[700%] tracking-normal leading-6 px-4 py-4 
                  border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500
                   focus:border-blue-500 "
                    placeholder="City"
                    required
                  />
                  <input
                    type="Password"
                    id="Password"
                    className="mt-1 block w-full  px-4 py-4  border border-gray-300 rounded-lg shadow-sm focus:outline-none
                   focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Postal code"
                    required
                  />
                </div>

                <div className="flex gap-4 ">
                  <input
                    type="name"
                    id="name"
                    className="mt-1 block w-full text-[16px] opacity-[700%] tracking-normal leading-6 px-4 py-4 
                  border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500
                   focus:border-blue-500 "
                    placeholder="State "
                    required
                  />
                  <input
                    type="Password"
                    id="Password"
                    className="mt-1 block w-full  px-4 py-4  border border-gray-300 rounded-lg shadow-sm focus:outline-none
                   focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Country"
                    required
                  />
                </div>
              </div>
              <input
                type="text"
                id="name"
                placeholder="website (Optional)"
                className="mt-1 block w-full  px-4 py-4  border border-gray-300 rounded-lg shadow-sm focus:outline-none
                   focus:ring-blue-500 focus:border-blue-500"
              />
              <div onClick={tolaststep} className="flex text-center justify-center text-white bg-[#0C46D3] text-[14px] px-4 py-4 rounded-lg hover:bg-blue-600">
                <button disabled type="submit">Continue</button>
                
              </div>
              <p>
                Already Have an Account?{" "}
                <span
                  onClick={Signin}
                  className="text-[#0C46D3] underline-offset-8 hover:underline hover:decoration-wavy"
                >
                  Sign In
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
