import { useContext } from "react";
import { SidebarAuth } from "../SIdebarAuth";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../ContextFolder/ContextApi";

export const Signin = () => {
  const { email, Setemail, Password, SetPassword } = useContext(MyContext);
  const navigate = useNavigate();

  const forgotpassword = () => {
    navigate("/forgotpassword");
  };
  const personalsignin = () => {
    navigate("/personalsignup");
  };

  return (
    <>
      <div className="w-full flex md:px-24 lg:px-0">
        <div className="w-full hidden md:hidden lg:block">
          <SidebarAuth />
        </div>

        <div className="w-full lg:mx-4 bg-white/100 flex flex-col lg:place-content-center lg:h-screen">
          <p className="lg:hidden leading-[40px] tracking-widest font-medium text-2xl inline-flex items-center gap-4 text-[#0C46D3] pl-4 mt-8">
            NESTLY PAY
          </p>
          <div className="flex flex-col lg:mt-11 mt-48 px-6 lg:px-28">
            <h2 className="lg:text-4xl text-3xl text-[#1a1919] leading-10">
              Welcome Back!
            </h2>
            <p className="text-left text-[#000000B2] leading-[30px]">
              Pick up where you left off.
            </p>
            <form action="" className="space-y-6 mt-8">
              <input
                type="email"
                id="email"
                className="mt-1 block w-full text-[16px] opacity-[700%] tracking-normal leading-6 px-4 py-4 
                  border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500
                   focus:border-blue-500"
                placeholder="Email address"
                required
                value={email}
                onChange={(e) => Setemail(e.target.value)}
              />
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-4 py-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none
                   focus:ring-blue-500 focus:border-blue-500"
                placeholder="Password"
                required
                value={Password}
                onChange={(e) => SetPassword(e.target.value)}
              />
              <div
                className="flex w-full text-center text-[14px] justify-center text-white bg-[#0C46D3] px-4 py-4 rounded-lg hover:bg-blue-600"
              >
                <button className="w-full h-full" type="button">
                  Sign In
                </button>
              </div>

              <div className="text-center text-[16px] space-y-4">
                <p>
                  Don't Have an Account?
                  <span
                    onClick={personalsignin}
                    className="text-[#0C46D3] underline-offset-8 hover:underline hover:decoration-wavy"
                  >
                    Create One
                  </span>{" "}
                </p>
                <p className="text-[#F38585]" onClick={forgotpassword}>
                  Forgot Password
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
