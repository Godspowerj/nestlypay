import React from "react";

const TableComponent = () => {
  const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
  };

  const transactions = [
    {
      clientName: "Ayo John",
      email: "john@mail.com",
      amount: "₦39,000.00",
      date: "07/07/2022",
      status: "Pending",
    },
    {
      clientName: "Jonah Godspower",
      email: "dom@nestlypay.co",
      amount: "₦98,000.00",
      date: "07/07/2022",
      status: "Success",
    },
    {
      clientName: "Doreen Kpoora",
      email: "hello@doe.xyz",
      amount: "₦18,000.00",
      date: "07/07/2022",
      status: "Cancelled",
    },
  ];
  const statusStyles = {
    Pending: "bg-[#E1981B1A] text-[#E1981B]",
    Success: "bg-[#45B8451A] text-[#45B845]",
    Cancelled: "bg-[#FF00001A] text-[#FF0000] ",
  };
  return (
    <div className="w-full overflow-x-auto scrollbar-hidden">
      <table className=" w-full">
        <thead className="text-left">
          <tr className="">
            <th className="py-2 px-4 w-7"></th>
            <th className="py-2 px-4 text-black/100 font-medium text-[16px] leading-9">
              Client Name
            </th>
            <th className="py-2 px-4 text-black/100 font-medium text-[16px] leading-9">
              Email Address
            </th>
            <th className="py-2 px-4 text-black/100 font-medium text-[16px] leading-9">
              Amount
            </th>
            <th className="py-2 px-4 text-black/100 font-medium text-[16px] leading-9">
              Date
            </th>
            <th className="py-2 px-4 text-black/100 font-medium text-[16px] leading-9">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="">
          {transactions.map((transaction, index) => (
            <tr  className="" >
              <td className="">
                <p
                  style={{ backgroundColor: getRandomColor() }}
                  className="bg-green-800 flex items-center justify-center h-[40px] w-[40px] rounded-full text-white"
                >
                  {transaction.clientName.charAt(0).toUpperCase()}
                </p>
              </td>
              <td className="py-4 px-4 text-[16px] text-[#000000CC]">
                {transaction.clientName}
              </td>
              <td className="py-4 px-4 text-[16px] text-[#000000CC]">
                {transaction.email}
              </td>
              <td className="py-4 px-4 text-[16px] text-[#000000CC]">
                {transaction.amount}
              </td>
              <td className="py-4 px-4 text-[16px] text-[#000000CC]">
                {transaction.date}
              </td>
              <td
                className={`text-center rounded-s-full py-6 text-sm ${
                  statusStyles[transaction.status]
                }`}
              >
                {transaction.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
