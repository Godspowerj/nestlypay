import { SidebarAuth } from "../SIdebarAuth";
import { useNavigate } from "react-router-dom";
export const NewUserSignUp = () => {
  const navigate = useNavigate();
  const toUserPersonalDashboard = () => {
    navigate("/userpersonaldashboard");
  }
  return (
    <>
      <div className="w-full flex ">
        <div className="hidden md:block w-full">
          <SidebarAuth />
        </div>

        <div className="w-full">
          <p className="lg:hidden leading-[40px] tracking-widest font-medium text-2xl inline-flex items-center gap-4 text-[#0C46D3] pl-4 mt-8">
            NESTLY PAY
          </p>
          <div className=" space-y-6 lg:px-28 bg-white/100 flex flex-col place-content-center overflow-hidden h-[calc(100vh-6.5rem)] px-5 sm:h-[calc(100vh-3rem)] lg:h-screen ">
            <h2 className="text-[36px] leading-10">Create an Account</h2>
            <p className="text-[#000000B2]">
              Tell us a bit about you. Provide your legal name, work mail and
              home address.
            </p>
            <form action="" className="space-y-4">
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
                placeholder="Email Address"
                required
              />
              <input
                type="Password"
                id="Password"
                className="mt-1 block w-full px-4 py-4  border border-gray-300 rounded-lg shadow-sm focus:outline-none
                   focus:ring-blue-500 focus:border-blue-500"
                placeholder="Password"
                required
              />
            </form>{" "}
            <div className="flex text-center justify-center text-white bg-[#0C46D3] text-[14px] px-4 py-4 rounded-lg hover:bg-blue-600">
              <button type="submit" onClick={toUserPersonalDashboard}>Create Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
