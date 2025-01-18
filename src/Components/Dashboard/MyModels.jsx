import { assets } from "../../assets/img";
export const MyModels = () => {
  return (
    <>
      <div className="w-[100%] h-[100vh] space-y-5 text-center pt- md:pt-0 flex flex-col justify-center items-center">
        <img className="md:w-[150px] w-[100px]" src={assets.modelimg} alt="" />
        <div>
          <p className="text-2xl font-medium">Oops! You don’t have any custom model yet.</p>
          <span className="text-[14px] leading-7 text-[#000000B2]">Create one here.</span>
        </div>
      </div>
    </>
  );
};
