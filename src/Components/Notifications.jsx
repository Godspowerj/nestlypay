import React from "react";

const Successful = ({
  title = "Success",
  message = "Your reset link has been sent to your email.",
}) => {
  return (
    <div className="">
      <div className="">
        <img
          className="bg-[#27AE601A] p-2 rounded-full"
          src="/TICK.png"
          alt=""
        />
        <div>
          <h2>{title}</h2>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

const Failed = ({
  title = "Error",
  message = "Your reset link has been sent to your email.",
}) => {
  return (
    <div>
      <img
        className="bg-[#FF00001A] p-2 rounded-full"
        src="/ERROR.png"
        alt=""
      />
      <div>
        <h2>{title}</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};

export { Successful, Failed };
