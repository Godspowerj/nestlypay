
import MyChart from "../MyChart";
import TransactionTable from "./TransactionTable";

const Userdashboard = () => {
  return (
    <>
      <div className="">
        <div className="md:flex flex-none items-center justify-between">
          <div className="w-[80%] lg:w-full leading-8">
            <h2 className="text-[20px] md:leading-10  font-medium">
              Welcome to NestlyPay, Godspower 🎊
            </h2>
            <p className="text-[#000000B2] leading-6 md:leading-0 text-[14px] mb-5 md:mb-5">
              Here is your business overview
            </p>
          </div>
          <button
            type="button"
            className="text-[#0C46D3] bg-white border-2 border-[#0C46D3] whitespace-nowrap px-4 py-4 rounded-lg text-[16px]"
          >
            Create Invoice
          </button>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-8 pt-7 md:pb-8">
          <div className="bg-[#0C46D3] text-white/100 rounded-xl px-8 py-10 flex flex-col place-content-center">
            <div>
              <p>Completed Payments</p>
              <h2 className="font-bold text-lg/10 text-white/100">
                ₦131,900,092.00
              </h2>
            </div>
          </div>
          <div className="rounded-xl px-8 py-10 border border-black/10 flex flex-col place-content-center">
            <div>
              <p className="text-[#000000B2] text-sm leading-[21px]">
                Unpaid Invoices
              </p>
              <h2 className="font-bold text-lg/10 text-black/100">
                ₦300,900,092.00
              </h2>
            </div>
            <p className="text-[#FF0000B2] text-sm">- Decreased 9.4% today</p>
          </div>
          <div className="rounded-xl px-8 py-10 border border-black/10 flex flex-col place-content-center">
            <div>
              <p className="text-[#000000B2] text-sm leading-[21px]">
                Total Invoices
              </p>
              <h2 className="font-bold text-lg/10 text-black/100">31,900</h2>
            </div>
            <p className="text-[#27AE60B2] text-sm">+ Increased 39.4% today</p>
          </div>
        </div>

        <div className="flex flex-col ">
          <div className="flex justify-between items-center pt-9 ">
            <p className="flex items-center gap-1 text-[20px] leading-[36px] font-medium">
              Statistics <img src="./alert-circle.png" alt="" />
            </p>
            <p className="text-[14px] leading-[28px] font-medium border-[1px] rounded-md px-5 py-2 bg-white inline-flex">
              Pick a date
            </p>
          </div>
        </div>
        <div className="w-full">
          <MyChart />
        </div>
        <TransactionTable />
        
      </div>
    </>
  );
};

export default Userdashboard;
