import { useNavigate } from "react-router-dom";
import { SidebarAuth } from "../SIdebarAuth";
import { assets } from "../../assets/img";



export const Forgetpassword = () => {
  const navigate = useNavigate();


  const backtosignin = () => {
    navigate("/signin");
  };
  const gotoupdatepassword = () => {
    navigate("/updatepassword");
  };
  


  return (
    <>
      <div className="flex w-full md:px-24">
        <div className="lg:w-full md:hidden lg:block ">
          <SidebarAuth />
        </div>
        
        <div className="w-full space-y-4 flex-col flex lg:place-content-center lg:grid px-4  items-left "> 
          <p className="lg:hidden leading-[40px] tracking-widest font-medium text-2xl inline-flex items-center gap-4 text-[#0C46D3]  mt-8">
            NESTLY PAY
          </p>
          

          <form action="" className="space-y-6 py-32">
            <h2 className="text-4xl">Forgot Password?</h2>
            <p className=" text-[#000000B2]">
              Did you forget your password ? Let’s help you reset it.
            </p>
            <input
              name="email"
              className="mt-1 block w-full text-[16px] opacity-[700%] tracking-normal leading-6 px-4 py-4 
                  border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500
                   focus:border-blue-500 "
              type="email"
              placeholder="Email Address"

              required
            />
            <p
             onClick={ gotoupdatepassword}
              className="flex text-center justify-center text-white bg-[#0C46D3] text-[14px] px-4 py-4 rounded-lg hover:bg-blue-600"
            >
              Get Reset Link
            </p>
            <p
              className="text-[16px] hover:underline hover:decoration-wavy"
              onClick={backtosignin}
            >
              Back to Sign In
            </p>
            
          </form>

        </div>
      </div>
    </>
  );
};
