import React from "react";
import DeleteTable from "../../Components/DeleteTable";
import DeleteConfirmation from "../../Components/DeleteConfirmation";
import { assets } from "../../assets/img";
import { MyContext } from "../../ContextFolder/ContextApi";
import { useContext } from "react";
import EditClient from "../../Components/EditClient";
import AddClients from "../../Components/AddClients";

const SubMerchant = () => {
  const transactions = [
    {
      clientName: "Ayo John",
      email: "john@mail.com",
      Role: "Manager"
    },
    {
      clientName: "Jonah Godspower",
      email: "dom@nestlypay.co",
      Role: "Supervisor"
    },
    {
      clientName: "Doreen Kpoora",
      email: "hello@doe.xyz",
      Role: "Assistant Manager"
    },
  ];
  const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
  };
  const {
    handleEditClientopen,
    handEditClient,
    handleDeleteCancelopen,
    handleDeleteCancel,
    addclients,
    Setaddclients,
    handleaddClientopen,
  } = useContext(MyContext);
  return (
    <>
      <div className="space-y-10 min-h-screen relative">
        <div className="flex items-center justify-between">
          <h2 className="md:text-2xl font-medium">Sub Merchants</h2>
          <button
            onClick={handleaddClientopen}
            className="border-2 text-[#0C46D3] border-[#0C46D3] bg-white py-4 px-5 rounded-xl"
          >
            Add Sub Merchant
          </button>
        </div>

        <div className="w-full overflow-x-auto scrollbar-hidden">
          <table className=" w-full ">
            <thead className="text-left">
              <tr className="">
                <th className="py-2 px-4 w-7"></th>
                <th className="py-2 px-4 text-black/100 font-medium text-[16px] leading-9">
                  Name
                </th>
                <th className="py-2 px-4 text-black/100 font-medium text-[16px] leading-9">
                  Email Address
                </th>
                <th className="py-2 px-4 text-black/100 font-medium text-[16px] leading-9">
                  Role
                </th>
                <th className="py-2 px-4 text-black/100 font-medium text-[16px] leading-9">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="">
              {transactions.map((transaction, index) => (
                <tr key={index} className="p-6">
                  <td className="">
                    <p
                      style={{ backgroundColor: getRandomColor() }}
                      className="bg-green-800 flex items-center justify-center h-[40px] w-[40px] rounded-full text-white"
                    >
                      {transaction.clientName.charAt(0).toUpperCase()}
                    </p>
                  </td>
                  <td className="py-5 px-4 text-[16px] text-[#000000CC]">
                    {transaction.clientName}
                  </td>
                  <td className="py-5 px-4 text-[16px] text-[#000000CC]">
                    {transaction.email}
                  </td>
                  <td className="py-5 px-4 text-[16px] text-[#000000CC] whitespace-nowrap">
                    {transaction.Role}
                  </td>
                  <td className="py-5 px-4 text-[16px] text-[#000000CC] flex items-center gap-3">
                    <img
                      onClick={handleEditClientopen}
                      src={assets.editicon}
                      alt="edit"
                    />
                    <img
                      onClick={handleDeleteCancelopen}
                      src={assets.deleteicon}
                      alt="delete"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {handleDeleteCancel && (
        <DeleteConfirmation message="Are you sure you want to delete this sub-merchant? Once deleted, it can't be undone." />
      )}
      {handEditClient && (
        <EditClient updateButtonText="Next" phonePlaceholder="Role" />
      )}
      {addclients && (
        <AddClients placeholder3="Role" button="Next" title="Add Sub Merchant" />
      )}
    </>
  );
};

export default SubMerchant;
