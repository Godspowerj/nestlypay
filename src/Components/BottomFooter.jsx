import { assets } from "../assets/img";

export const BottomFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="flex flex-col md:flex-row items-center  md:justify-between  md:gap-
       align-center text-center pt-8 pb-8 md:pl-14 md:pr-8 md:max-w-6xl md:flex md:m-auto md:align-center ">
        <div className="flex gap-5 align-center justify-center">
          <img  onClick={scrollToTop} src={assets.facebook} alt="" />
          <img  onClick={scrollToTop}src={assets.twitter} alt="" />
          <img  onClick={scrollToTop}src={assets.instagram} alt="" />
          <img onClick={scrollToTop} src={assets.linkedin} alt="" />
        </div>
        <p className="text-1xl text-[#000000B2] leading-7 ">help@nestlypay.co</p>
        <p className="text-[#000000B2]">© 2022. NestlyPay Limited All rights reserved</p>
      </div>
    </>
  );
};
