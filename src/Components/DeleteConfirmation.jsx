import { assets } from "../assets/img";
import { MyContext } from "../ContextFolder/ContextApi";
import { useContext } from "react";
const DeleteConfirmation = ({
  title = "Delete Client",
  message = "Are you sure you want to delete this client? Once deleted, it can't be undone.",
  cancelButtonText = "Cancel",
  deleteButtonText = "Delete",
}) => {
  const {handleDeleteCancelclose,SethandleDeleteCancel} = useContext(MyContext);
  return (
    <>
      <div className="fixed inset-0 top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 backdrop-blur-sm z-[1000]">
        <div className="flex flex-col bg-white w-[340px] md:w-96 space-y-6 rounded-xl p-6 md:p-6 ">
          <img className="w-[70px]" src={assets.deleteconfirmicon} alt="" />
          <h2 className="text-2xl">{title}</h2>
          <p className="text-[#000000B2] text-[16px]">{message}</p>
          <div className="flex items-center justify-between">
            <button onClick={handleDeleteCancelclose}
              className=" text-[#979797] border-[#979797] border-2 rounded-xl px-7 py-3"
              type=""
            >
              
              {cancelButtonText}
            </button>
            <button
              className="bg-[#FF3300] text-white rounded-xl px-7 py-3"
              type=""
            >
              {deleteButtonText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteConfirmation;
