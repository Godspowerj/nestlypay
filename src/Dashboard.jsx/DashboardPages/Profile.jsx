import React, { useRef, useState } from "react";
import { assets } from "../../assets/img";

const Profile = () => {
  const fileInputRef = useRef(null);
  const [profileImage, setProfileImage] = useState("/profile.jpg");

  const handleProfileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <div className="mb-9">
        <div className="flex flex-col bg-white items-center md:w-96  shadow-xl py-5 md:ml-10 rounded-lg space-y-7">
          <img
            className="size-20 rounded-full aspect-auto cursor-pointer"
            src={profileImage}
            alt="jj"
            onClick={handleProfileClick}
          />
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <div className="flex gap-4 text-sm">
            <button
              className="text-white bg-[#0C46D3] px-4 py-3 md:w-[130px] w-[120px] whitespace-nowrap rounded-lg"
              onClick={handleProfileClick}
            >
              Upload Image
            </button>
            <button
              className="px-4 py-3 text-[#979797] border-[1px] md:w-[130px] w-[120px] rounded-lg border-[#979797]"
              onClick={() => setProfileImage("/profile.jpg")}
            >
              Delete
            </button>
          </div>
          <form action="" className="px-5 space-y-3 ">
            <input
              className="border-[1.2px] bg-[#F1F1F1] w-full px-4 py-4 rounded-lg text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              type="text"
              placeholder="First Name"
            />
            <input
              className="border-[1.2px] bg-[#F1F1F1] w-full px-4 py-4 rounded-lg text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              type="text"
              placeholder="Last Name"
            />
            <input
              className="border-[1.2px] bg-[#F1F1F1] w-full px-4 py-4 rounded-lg text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              type="text"
              placeholder="Email Address"
            />
            <input
              className="border-[1.2px] bg-[#F1F1F1] w-full px-4 py-4 rounded-lg text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              type="text"
              placeholder="Phone Number"
            />
            <button className="bg-[#0c46d3] w-full text-sm text-white rounded-lg py-3">
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
