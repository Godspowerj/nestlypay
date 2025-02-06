import { assets } from "../assets/img";

export const Footer = () => {
 
  return (
    <>
      <div className="w-auto bg-[#0C46D3] text-white ">
        <div className="px-5 pt-5  max-w-7xl md:max-w-6xl md:flex md:flex-col md:justify-between md:text-left md:mx-auto">
          <h1 className="font-medium text-3xl pb-2 leading-10 md:text-5xl md:w-1/2 md:leading-tight pt-14 md:pb-6">
            Ready to Grow Your Business in One Solution?
          </h1>
          <h3 className=".mt-2 mb-4 lg:text-lg/8 lg:mt-4 lg:mb-6 text-white/90 block">
            Say hello to Nestlypay, a platform that enables you to send
            professional invoices, save time, digitalize your bills and manage
            your business in minutes.
          </h3>

          <p className="items-center pb-2 px-6 py-6 pt-2 rounded-lg border-2 inline-block mt-4 md:inline-flex md:w-[9rem] md:text-center">
            Get Started
          </p>

          <div className="flex items-baseline w-full">
            <img
              className="w-1/4 relative z-10 "
              src={assets.mobileframe}
              alt=""
            />
            <img
              className="max-w-64 lg:max-w-[54rem] md:max-w-[37rem] relative md:right-8 right-5 pt-5"
              src={assets.desktop}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
