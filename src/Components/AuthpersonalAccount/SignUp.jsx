import { assets } from "../../assets/img";
import { useNavigate } from "react-router-dom";
export const SignUp = () => {
  const navigate = useNavigate(); // Move this line up here

  const Confirmation = () => {
    navigate("/confirmation");
  };
   const Signin = () => {
    navigate("/signin");
   }

  return (
    <>
      <div className="flex w-full h-full md:px-24 lg:px-0 lg:flex ">
        <div className=" w-full hidden md:hidden h-[100vh]  bg-[#0C46D3]  text-white bg-brand-blue lg:pl-16 lg:pr-28  lg:flex flex-col justify-around">
          <div className="">
            <p className=" leading-[40px] tracking-widest font-medium text-2xl inline-flex items-center gap-4 text-white/100 mt-8">
              NESTLY PAY
            </p>
          </div>
          <div className="align-center flex flex-col justify-center h-[80vh] gap-4">
            <p className="text-3xl font-medium tracking-wide">
              Are you a Freelancer? <br /> Create a one time free invoice
              without signing in
            </p>
            <div className="flex items-center gap-3">
              <img src={assets.faces} alt="" />
              <span className="text-sm text-white/100">Join 1,893 People.</span>
            </div>
          </div>
        </div>

        <div className="w-full lg:px-24 bg-white/100 flex flex-col place-content-center overflow-hidden h-[calc(100vh-6.5rem)] px-5 sm:h-[calc(100vh-3rem)] lg:h-screen">
          <p className="absolute top-0 lg:hidden leading-[40px] tracking-widest font-medium text-2xl inline-flex items-center gap-4 text-[#0C46D3] mt-8">
            NESTLY PAY
          </p>
          <div className="w-full ">
            <h2 className="text-black/100 font-medium lg:text-2xl/10 text-2xl/10">
              Create free Invoice
            </h2>
            <p className="text-[#000000B2]">
              Create a one time free invoice without signing up.
            </p>
            <div className="space-y-8 mt-8">
              <form action="" className="space-y-8 mt-8">
                <input
                  type="name"
                  id="name"
                  className="mt-1 block w-full text-[16px] opacity-[700%] tracking-normal leading-6 px-4 py-4 
                  border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500
                   focus:border-blue-500 "

                  placeholder="Full Name"
                  required
                />
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-4 py-4  border border-gray-300 rounded-lg shadow-sm focus:outline-none
                   focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter Address"
                  required
                />

                <div onClick={Confirmation} className="flex text-center justify-center text-white bg-[#0C46D3] text-[14px] px-4 py-4 rounded-lg hover:bg-blue-600">
                  <button disabled type="submit" 
                 >
                    Create Now
                  </button>
                </div>
                <p>Already Have an Account? <span onClick={Signin}
                  className="text-[#0C46D3] underline-offset-8 hover:underline hover:decoration-wavy"
                >
                  Sign In
                </span></p>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
