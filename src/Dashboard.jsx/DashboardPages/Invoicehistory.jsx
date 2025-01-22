import TableComponent from "../../Components/Tablecomponent";

export const Invoicehistory = () => {
  return (
    <>
      <div className="space-y-10" >
        <div className="flex items-center justify-between">
          <h2 className="md:text-2xl font-medium">Account History</h2>
          <button  className="border-2 text-[#0C46D3] border-[#0C46D3] bg-white py-4 px-5 rounded-xl">Download CSV</button>
        </div>

        <TableComponent />
      </div>
    </>
  );
};
