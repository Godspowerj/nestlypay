import { useState } from "react";
import { assets } from "../assets/img";
import DeleteConfirmation from "./DeleteConfirmation";
import EditClient from "./EditClient";


const DeleteTable = () => {
  const [handleDeleteCancel, SethandleDeleteCancel] = useState(false);
  const [handEditClient, SethandEditClient] = useState(false);

  const handleDeleteCancelopen = () => {
    SethandleDeleteCancel(true);
  };
  const handleDeleteCancelclose = () => {
    SethandleDeleteCancel(false);
  };

  const handleEditClientopen = () => {
    SethandEditClient(true);
  };
  const handleEditClientclose = () => {
    SethandEditClient(false);
  };
  const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
  };

  const transactions = [
    {
      clientName: "Ayo John",
      email: "john@mail.com",
      phone: "+234 900 000 0000",
    },
    {
      clientName: "Jonah Godspower",
      email: "dom@nestlypay.co",
      phone: "+234 900 000 0000",
    },
    {
      clientName: "Doreen Kpoora",
      email: "hello@doe.xyz",
      phone: "+234 900 000 0000",
    },
  ];
  return (
    <>
      <div className="w-full overflow-x-auto ">
        <table className=" w-full">
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
                Phone
              </th>
              <th className="py-2 px-4 text-black/100 font-medium text-[16px] leading-9">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="">
            {transactions.map((transaction, index) => (
              <tr className="">
                <td className="">
                  <p
                    style={{ backgroundColor: getRandomColor() }}
                    className="bg-green-800 flex items-center justify-center h-[40px] w-[40px] rounded-full text-white"
                  >
                    {transaction.clientName.charAt(0).toUpperCase()}
                  </p>
                </td>
                <td className="py-2 px-4 text-[16px] text-[#000000CC]">
                  {transaction.clientName}
                </td>
                <td className="py-2 px-4 text-[16px] text-[#000000CC]">
                  {transaction.email}
                </td>
                <td className="py-2 px-4 text-[16px] text-[#000000CC] whitespace-nowrap">
                  {transaction.phone}
                </td>
                <td className="py-2 px-4 text-[16px] text-[#000000CC] flex items-center gap-3">
                  <img
                    onClick={handleEditClientopen}
                    src={assets.editicon}
                    alt="great"
                  />
                  <img
                    onClick={handleDeleteCancelopen}
                    src={assets.deleteicon}
                    alt="great"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {handleDeleteCancel && (
        <DeleteConfirmation
        
          handleDeleteCancel={handleDeleteCancel}
          SethandEditClient={SethandEditClient}
          handleDeleteCancelclose={handleDeleteCancelclose}
        />
      )}
      {handEditClient && (
        <EditClient
          handEditClient={handEditClient}
          SethandleDeleteCancel={SethandleDeleteCancel}
          handleEditClientclose={handleEditClientclose}
        />
      )}  
      </div>
    </>
  );
};

export default DeleteTable;
