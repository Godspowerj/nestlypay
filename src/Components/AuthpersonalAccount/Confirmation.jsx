import { assets } from "../../assets/img";


const Confirmation = () => {
  return (
    <>
    <div className="grid  place-items-center pt-40 space-y-5">
       <img className="w-[120px] " src={assets.successIcon} alt="" />  
       <p className="font-medium text-4xl">Success</p>
       <p className="text-[#000000B2] text-[16px] px-2 lg:text-[20px]">Click the link in your email to create a new invoice</p>
    </div>
    
    </>
  );
};

export default Confirmation ;
