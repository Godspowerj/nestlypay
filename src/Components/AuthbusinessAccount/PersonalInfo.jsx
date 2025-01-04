import { SidebarAuth } from "../SIdebarAuth";

export const PersonalInfo = () => {
  return (
    <>
      <div className="flex w-full h-">
        <div className="w-full hidden md:block ">
          <SidebarAuth />
        </div>
        <div className="w-full flex flex-col place-content-center  px-5 lg:px-24 h-screen">

          <h2 className="text-[#0C46D3] text-2xl lg:hidden absolute top-0 pt-7">
            NESTLY PAY
          </h2>
          <h2 className="text-[36px] ">Personal Information</h2>
          <p className="text-[#000000B2] text-[16px]">
            Provide your legal name and work mail.
          </p>
          <form action="" className="space-y-5 mt-8">
            <input
              type="name"
              id="name"
              className="mt-1 block w-full text-[16px] opacity-[700%] tracking-normal leading-6 px-4 py-4 
                  border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500
                   focus:border-blue-500 "
              placeholder="First Name"
              required
            />
            <input
              type="name"
              id="name"
              className="mt-1 block w-full  px-4 py-4  border border-gray-300 rounded-lg shadow-sm focus:outline-none
                   focus:ring-blue-500 focus:border-blue-500"
              placeholder="Last Name"
              required
            />
            <input
              type="email"
              id="email"
              className="mt-1 block w-full  px-4 py-4  border border-gray-300 rounded-lg shadow-sm focus:outline-none
                   focus:ring-blue-500 focus:border-blue-500"
              placeholder="Email Address"
              required
            />
            <div className="flex w-full text-center text-[14px] justify-center text-white bg-[#0C46D3]  px-4 py-4 rounded-lg hover:bg-blue-600">
              <button type="submit">Continue</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
