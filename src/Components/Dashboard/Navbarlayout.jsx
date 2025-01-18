import { useState } from "react";

export const Navbarlayout = ({ Togglesidebar }) => {
  const [notification, Setnotification] = useState(true);
  const [usernotification, Setusernotification] = useState(true);

  return (
    <div className="bg-white p-4 md:px-10 px-6 sticky top-0 z-[100] flex items-center justify-between shadow-sm">
      <div className="items-center justify-between ">
        <img
          onClick={Togglesidebar}
          className="lg:hidden block"
          src="./menu.png"
          alt=""
        />

        <div className="md:block">
          <div
            className="md:flex items-center justify-center border-[1px] w-[500px]
          leading-6 px-4 py-4 shadow-sm rounded-lg hidden"
          >
            <input
              type="search"
              id="search"
              className="mt-1 block w-full h-full text-[16px] opacity-[700%] tracking-normal 
             focus:ring-blue-500 focus:border-blue-500 rounded-lg border-none focus:outline-none"
              placeholder="Search"
              required
            />
            <img src="./search.png" alt="" />
          </div>
        </div>
      </div>

      {/* navbar notification box */}
      <div
        className={`absolute -top-48 right-16 bg-white px-5 py-5 rounded-lg flex gap-3 duration-300 transition-transform ${
          notification ? "translate-y-0" : "translate-y-72"
        }`}
      >
        <img src="./AVATAR.png" alt="" />
        <div>
          <div className="flex items-center justify-between">
            <h2>Account Verification</h2>
            <p className="text-[#00000080] text-[10px] leading-3">
              Today, 8:56pm
            </p>
          </div>

          <p className="text-[#4D4D4DBF]">
            Hi Dominic! We have received your verification request.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between space-x-6 ">
        <p className="text-[#E1981B] bg-[#E1981B1A] text-[12px] px-2 py-1 hidden md:block rounded-md">
          Request pending
        </p>

        <img
          onClick={() => Setnotification(!notification)}
          src="./notification.png"
          alt=""
        />
        <img
          onClick={() => Setusernotification(!usernotification)}
          className="size-12 object-center object-cover aspect-square rounded-full"
          src="./profile.jpg"
          alt=""
        />
      </div>

      {/* user notification bar */}
      <div
        className={`absolute right-12 -top-56 bg-[#FFFFFF] drop-shadow-lg px-8 py-6 rounded-lg transition-all duration-300 ${
          usernotification ? "translate-y-0" : "translate-y-[300px]"
        }`}
      >
        <ul className="space-y-5 text-left flex flex-col ">
          <li className="flex items-center gap-4">
            <img src="./userCircle.png" alt="profile" />
            Profile
          </li>
          <li className="flex items-center gap-4">
            <img src="./userSetting.png" alt="setting" />
            Settings
          </li>
          <li className="flex items-center gap-4">
            <img src="./userCheck.png" alt="notification" />
            Verification
          </li>

          <p>Sign Out</p>
        </ul>
      </div>
    </div>
  );
};
