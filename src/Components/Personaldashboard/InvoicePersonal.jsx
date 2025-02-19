import React from "react";
import CancelPayment from "./CancelPayment";
import { useContext } from "react";
import { MyContext } from "../../ContextFolder/ContextApi";
import SuccessPayment from "./SuccessPayment";

const InvoicePersonal = () => {
  const {cancelPayment,SetcancelPayment,successPayment,SetsuccessPayment} = useContext(MyContext)
  const invoiceData = [
    {
      invoiceId: "NES989238093",
      dueDate: "07/07/2022",
      issueDate: "07/07/2022",
      amount: "₦39,000.00",
      // status: [
      //   { src: "/success.png", alt: "Success" },
      //   { src: "/failed.png", alt: "Failed" },
      // ],
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="md:text-2xl font-medium">Account History</h2>
        <button className="border-2 text-[#0C46D3] border-[#0C46D3] bg-white py-4 px-5 rounded-xl">
          Download CSV
        </button>
      </div>
      <div className=" overflow-x-auto scrollbar-hidden">
        <table className=" whitespace-nowrap w-full mt-4">
          <thead>
            <tr>
              <th></th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Invoice ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Due Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Issue Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Amount
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {invoiceData.map((invoice, index) => (
              <tr key={index}>
                <td>
                  <p className="bg-green-800 text-center flex items-center justify-center size-20 w-10 h-10 rounded-full text-white">
                    S
                  </p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {invoice.invoiceId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {invoice.dueDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {invoice.issueDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {invoice.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex align-center gap-2">
                  <img onClick={()=>SetsuccessPayment(true)} src="/success.png" alt="Success" className="w-[40px]" />
                  <img onClick={()=>SetcancelPayment(true)} src="/failed.png" alt="" className="w-[40px]"/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {cancelPayment && <CancelPayment />}
      {successPayment && <SuccessPayment/>}
      
    </div>
  );
};

export default InvoicePersonal;
