import { SidebarAuth } from "../SIdebarAuth";

export const UpdatePassword = () => {
  return (
    <>
      <div className="w-full flex h-full md:px-24">
        <div className="w-full hidden lg:block ">
          <SidebarAuth />
        </div>
        <div className="w-full px-4">
        
        <h2 className="text-[#0C46D3] text-2xl lg:hidden absolute top-0 pt-7">
            NESTLY PAY
          </h2>
          <div className="w-full lg:px-24 bg-white/100 flex flex-col place-content-center overflow-hidden h-[calc(100vh-6.5rem)] sm:h-[calc(100vh-3rem)] ">
            <h2 className="text-[30px]" >Reset Password</h2>
            <form action="" className="space-y-4">
              <input
                type="Password"
                id="Password"
                className="mt-1 block w-full text-[16px] opacity-[700%] tracking-normal leading-6 px-4 py-4 
                  border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500
                   focus:border-blue-500 "
                placeholder="New Password"
                required
              />
              <input
                type="Password"
                id="Password"
                className="mt-1 block w-full px-4 py-4  border border-gray-300 rounded-lg shadow-sm focus:outline-none
                   focus:ring-blue-500 focus:border-blue-500"
                placeholder="Confirm Password"
                required
              />
              <div className="flex text-center justify-center text-white bg-[#0C46D3] text-[14px] px-4 py-4 rounded-lg hover:bg-blue-600">
                <button type="submit">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
