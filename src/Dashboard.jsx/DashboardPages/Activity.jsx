import React from "react";

const Activity = () => {
  const activities = [
    {
      header: "Jonah Godspower ",
      message: "You just created a submerchant",
      date: "07-07-2022",
    },
    {
        header: "Doreen Kpoora ",
        message: "You just widthdrew $30,000 ",
        date: "07-07-2022",
      },
  ];
  return (
    <div className="space-y-4 whitespace-nowrap ">
      <h1 className="font-medium text-2xl"> My Activities </h1>
      <div>
        <div className="space-y-4 overflow-auto scrollbar-hidden">
          {activities.map((Activity, index) => (
            <div key={index} className="flex items-center space-x-6  overflow-auto scrollbar-hidden justify-between">
              <div className="flex gap-4 items-center">
                <p className="bg-green-800 flex items-center text-center justify-center aspect-auto size-10 rounded-full text-white">
                {Activity.header.charAt(0).toUpperCase()}
                </p>
                <div className="flex flex-col justify-between ">
                  <h3 className="text-[18px] leading-[27px]">{Activity.header}</h3>
                  <p className="text-[14px] leading-9 text-[#000000CC]">{Activity.message}</p>
                </div>
              </div>

              <p className="text-[#000000] text-[16px]">{Activity.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activity;
