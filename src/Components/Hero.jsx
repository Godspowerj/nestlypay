import { Link } from "react-router-dom";
import { assets } from "../assets/img";
import { Footer } from "./Footer";
import { Imageslider } from "./Imageslider";

export const Hero = () => {
  return (
    <>
      <div className="flex flex-col w-full align-center md:h-auto  bg-[#0C46D3]   relative justify-center min-h-96 pb-12 text-white ">
        <div className="flex text-center  flex-col lg:pt-20 lg:pb-96 ">
          <p
            className=" tracking-normal text-3xl/10 lg:w-[60%] lg:mx-auto font-medium text-white lg:text-5xl/snug  px-6 
            "
          >
            Connecting Businesses for Simplified Payments.
          </p>
          <span className="text-lg px-12 lg:w-[40%] md:w-[70%] md:mx-auto lg:mx-auto">
            Create and send invoices, manage your finance, track sales, and get
            paid faster.
          </span>
          <div>
            <Link to="signup">
              <p className=" border-2 inline-block border-white bg-white text-[#0C46D3] rounded-lg  p-3  mt-5 mb-8 hover:bg-[#0C46D3] hover:text-white transition-all duration-300 ease-out">
                Create free Invoice
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className=" px- lg:max-w-7xl  lg:flex lg:items-center lg:justify-between lg:text-center lg:mx-auto lg:flex-col">
        <div className="px-5 mt-[-90px] relative lg:mt-[-400px] lg:mb-0 lg:max-w-7xl lg:flex lg:items-center lg:justify-between lg:mx-auto lg:flex-col">
          <img
            className="lg:max-w-6xl lg:pl-13 lg:pr-13 "
            src={assets.landing_img}
            alt=""
          />{" "}
        </div>

        <div className="p-4 lg:w-[40rem] lg:mr-[32rem] ">
          <p className="text-[#000000B2]  font-normal leading-6 pb-2 text-left  max-w-7xl lg:max-w-6xl flex items-center justify-between mx-auto ">
            Never chase a client again. Speed up your cash flow and manage our
            business at your fingertips. Let Nestlypay help with the hard work,
            while you focus on your business.
          </p>
          <h2 className="flex  align-center text-[#070707] font-medium  gap-2  transition-all hover:gap-4 ease-in-out duration-300 text-lg">
            Get a fast invoice today
            <img className="w-7 " src={assets.arrow_icon} alt="" />
          </h2>
        </div>
        <Imageslider />
      </div>
      <Footer />
    </>
  );
};
