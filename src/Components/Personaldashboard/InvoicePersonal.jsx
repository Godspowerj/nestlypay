import React from "react";

const InvoicePersonal = () => {
const invoiceData = [
    {
        invoiceId: "NES989238093",
        dueDate: "07/07/2022",
        issueDate: "07/07/2022",
        amount: "₦39,000.00",
        status: [
            { src: "/success.png", alt: "Success" },
            { src: "/failed.png", alt: "Failed" }
        ]
    }
];

return (
    <div>
        <div className="flex items-center justify-between">
            <h2 className="md:text-2xl font-medium">Account History</h2>
            <button className="border-2 text-[#0C46D3] border-[#0C46D3] bg-white py-4 px-5 rounded-xl">
                Download CSV
            </button>
        </div>
        <table className="overflow-x-scroll min-w-full whitespace-nowrap mt-4">
            <thead>
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Invoice ID
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Due Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Issue Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                    </th>
                </tr>
            </thead>
            <tbody>
                {invoiceData.map((invoice, index) => (
                    <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{invoice.invoiceId}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{invoice.dueDate}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{invoice.issueDate}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{invoice.amount}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex align-center gap-2">
                            {invoice.status.map((status, idx) => (
                                <img key={idx} className="w-[50px]" src={status.src} alt={status.alt} />
                            ))}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);
};

export default InvoicePersonal;
