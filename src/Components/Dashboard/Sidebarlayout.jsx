import { NavLink } from "react-router-dom";

export const Sidebarlayout = ({ Settogglesidebar, togglesidebar }) => {
  const navigationlink = ({ isActive }) => {
    return isActive ? "border-l-8 border-[#0C46D3] bg-[#E7EDFB]"  : " ";
  };

  return (
    <div className="h-screen lg:block z-[1000] w-[100%] md:w-[25%] mt-20 md:mt-0 fixed scrollbar-hidden overflow-y-auto">
      <div>
        {/* Header */}
        <div className="hidden md:px-10 md:block bg-white py-5 mb-6 sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <img src="/COMPANY LOGO.png" alt="Company Logo" className="w-[50px]" />
            <div className="ml-2">
              <h2 className="text-[18px] leading-8 font-normal">Hype Agency</h2>
              <p className="text-sm text-gray-500">Growth and Marketing</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav
          className={`pt-4 md:pt-0 px-10 md:px-0 text-black/75 md:mb-10 pb-16 md:pb-0 transition-all duration-300 w-screen bg-white ${
            togglesidebar ? "translate-y-0" : "translate-y-[-700px] md:translate-y-0"
          }`}
        >
          <ul className="flex flex-col md:space-y-2 ">
            <NavLink to="" className={navigationlink}>
              <li className="flex items-center gap-4 text-[16px] md:px-10 py-3 md:-ml-1">
                <img src="./home.png" alt="homeicon" />
                Home
              </li>
            </NavLink>
            <p className="font-medium text-black/50 text-xs/6 py-2 md:px-10">ACCOUNT</p>
            <NavLink to="mymodels" className={navigationlink}>
              <li className="flex items-center font-thin gap-4 md:px-11 py-3 md:ml-0">
                <img src="./models.png" alt="homeicon" />
                My Models
              </li>
            </NavLink>
            <NavLink to="mymodels" className={navigationlink}>
              <li className="flex items-center md:px-11 md:ml-0 py-3 gap-4">
                <img src="./activity.png" alt="homeicon" />
                My Activities
              </li>
            </NavLink>
            <p className="font-medium text-black/50 text-xs/6 py-2 md:px-10">TRANSACTIONS</p>
            <NavLink to="mymodels" className={navigationlink}>
              <li className="flex items-center md:px-11 md:ml-0 py-3 gap-4">
                <img src="./invoice.png" alt="homeicon" />
                Invoice History
              </li>
            </NavLink>
            <NavLink to="mymodels" className={navigationlink}>
              <li className="flex items-center md:px-11 py-3 md:ml-0 gap-4">
                <img src="./clients.png" alt="homeicon" />
                Clients
              </li>
            </NavLink>
            <p className="font-medium text-black/50 py-2 text-xs/6 md:px-10">BUSINESS</p>
            <NavLink to="mymodels" className={navigationlink}>
              <li className="flex items-center md:px-11 py-3 md:ml-0 gap-4">
                <img src="./sub merchant.png" alt="homeicon" />
                Sub Merchant
              </li>
            </NavLink>
            <NavLink to="mymodels" className={navigationlink}>
              <li className="flex items-center md:px-11 py-3 md:ml-0 gap-4">
                <img src="./catalog.png" alt="homeicon" />
                Catalog
              </li>
            </NavLink>
            <NavLink to="mymodels" className={navigationlink}>
              <li className="flex items-center md:px-11 py-3 md:ml-0 gap-4">
                <img src="./draft.png" alt="homeicon" />
                Draft
              </li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
};
