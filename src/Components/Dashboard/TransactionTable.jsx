import React, { useState } from "react";


const transactions = [
  {
    clientName: "Wisdom Ojimah",
    email: "ojimahwisdom01@gmail.com",
    amount: "₦39,000.00",
    date: "13/06/2024",
    status: "Pending",
  },
  {
    clientName: "Jane Ojimah",
    email: "janeojimah@gmail.com",
    amount: "₦39,000.00",
    date: "13/06/2024",
    status: "Success",
  },
  {
    clientName: "Dominic Praise",
    email: "dom@nestlypay.com",
    amount: "₦39,000.00",
    date: "13/06/2024",
    status: "Cancelled",
  },
];

// CSS classes for different statuses
const statusClasses = {
  Pending: "bg-yellow-100 text-yellow-800 px-4 py-4",
  Success: "bg-green-100 text-green-800 px-4 py-4",
  Cancelled: "bg-red-100 text-red-800 px-4 py-4",
};

// Component for displaying the transaction table
const TransactionTable = () => {
  const [selecttrans, Setselecttrans] = useState(null);
  console.log(selecttrans);
 
  return (
    <div className="pt-16 w-full overflow-x-auto">

      <div className="flex items-center justify-between pb-7">
        <h2>Transaction History</h2>
        <p>View All</p>
      </div>

      
      <table className="w-full ">
        {/* Table Head */}
        <thead>
          <tr className="">
            
            <th className="text-left py-2 px-4 "></th>
            <th className="text-left py-2 px-4 ">Amount</th>
            <th className="text-left py-2 px-4 ">Date</th>
            <th className="text-left py-2 px-4 ">Status</th>
            <th className="text-left py-2 px-4 ">Status</th>
            <th className="text-left py-2 px-4 ">Status</th>
            
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="z-50">
          {transactions.map((transaction, index) => (
            <tr key={index} >
              <td className="py-2 md:px-4 p-0"><img src="./AVATAR.png" alt="Avatar" /></td>
              <td className="py-2 px-4 ">{transaction.clientName}</td>
              <td className="py-2 px-4 ">{transaction.email}</td>
              <td className="py-2 px-4 ">{transaction.amount}</td>
              <td className="py-2 px-4 ">{transaction.date}</td>
              <td className="px-5 py-3">
                <span onClick={() => alert(`Status: ${transaction.status}`)} 
                  className={` text-sm font-medium rounded-lg ${statusClasses[transaction.status]}`}
                >
                  {transaction.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
