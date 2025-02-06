import { SidebarAuth } from "../SIdebarAuth";
import { useNavigate } from "react-router-dom";

export const Onelaststep = () => {
  const navigate = useNavigate();

  const toUserdashboard = () => {
    navigate("/userdashboard");
  };
  return (
    <>
      <div className="flex  w-full h-screen md:px-24 lg:px-0 ">
        <div className="w-full hidden md:hidden lg:block">
          <SidebarAuth />
        </div>
        <div className="w-full place-content-center">
          <h2 className="text-[#0C46D3] text-2xl lg:hidden absolute top-0 pt-7">
            NESTLY PAY
          </h2>
          <div className="w-full space-y-2 ">
            <h2 className="text-[36px] md:px-24">One Last Step</h2>
            <p className="text-[#000000B2] md:px-24">
              Avoid easily guessable password, and make sure it is easy to
              remember.
            </p>

            <form action="" className="space-y-6 mt-4 md:px-24">
              <input
                type="name"
                id="name"
                className="mt-1 block w-full  px-4 py-4  border border-gray-300 rounded-lg shadow-sm focus:outline-none
                   focus:ring-blue-500 focus:border-blue-500"
                placeholder="Password"
                required
              />
              <input
                type="email"
                id="email"
                className="mt-1 block w-full  px-4 py-4  border border-gray-300 rounded-lg shadow-sm focus:outline-none
                   focus:ring-blue-500 focus:border-blue-500"
                placeholder="Confirm Password"
                required
              />

              <div
                onClick={toUserdashboard}
                className="flex w-full text-center  justify-center text-white bg-[#0C46D3]  px-4 py-4 rounded-lg hover:bg-blue-600"
              >
                <button className="text-[14px]" type="submit">
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
