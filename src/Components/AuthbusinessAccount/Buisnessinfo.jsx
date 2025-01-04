import { SidebarAuth } from "../SIdebarAuth";

export const Businessinfo = () => {
  return (
    <>
      <div className="flex w-full h-full">
        <div className="w-full hidden lg:block">
          <SidebarAuth />
        </div>

        <div className="w-full md:px-28 lg:px-24 bg-white/100 flex flex-col place-content-center  h-[calc(100vh-6.5rem)] sm:h-[calc(100vh-3rem)] ">
          <h2 className="text-[36px] leading-10">Business Information</h2>
          <p className="text-[16px] text-[#000000B2]">
            Provide your business name, business mail and company address.
          </p>

          <form action="" className="space-y-5">
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
            <div className="flex justify-between  gap-8">
              <div className="space-y-5 ">
                <input
                  type="name"
                  id="name"
                  className="mt-1 block w-full text-[16px] opacity-[700%] tracking-normal leading-6 px-4 py-4 
                  border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500
                   focus:border-blue-500 "
                  placeholder="city"
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

              <div className="space-y-5 ">
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
                  placeholder="country"
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
            <div className="flex text-center justify-center text-white bg-[#0C46D3] text-[14px] px-4 py-4 rounded-lg hover:bg-blue-600">
              <button type="submit">Continue</button>
            </div>
            <p>
              Already Have an Account?{" "}
              <span
                // onClick={Signin}
                className="text-[#0C46D3] underline-offset-8 hover:underline hover:decoration-wavy"
              >
                Sign In
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
