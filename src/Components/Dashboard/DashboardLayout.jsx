import { useState } from "react";
import { Navbarlayout } from "./Navbarlayout";
import { Sidebarlayout } from "./Sidebarlayout";
import { Outlet } from "react-router-dom";

export const Dashboard = () => {
  const [togglesidebar, Settogglesidebar] = useState(false);

  const Togglesidebar = () => {
    Settogglesidebar(!togglesidebar);
  };
  return (
    <div className="flex md:h-screen h-full md:overflow-hidden">
      <Sidebarlayout
        Settogglesidebar={Settogglesidebar}
        togglesidebar={togglesidebar}
      />

      <div className="flex-1 md:ml-[25%] flex flex-col overflow-y-auto">
        <Navbarlayout Togglesidebar={Togglesidebar} />
        <main className="flex-1 h-[100vh] md:px-10 px-6 py-6 bg-gray-50 -z-50 ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
