import React, { useState } from "react";
import DeleteTable from "../../Components/DeleteTable";
import AddClients from "../../Components/AddClients";

const Clients = () => {
  const [addclients, Setaddclients] = useState(false); 

  const handleAddClientopen = () => {
    console.log("Opening Add Client Modal");
    Setaddclients(true);
  };

  const handleAddClientclose = () => {
    
    Setaddclients(false);
  };

  return (
    <>
      <div>
        <div className="space-y-10 min-h-screen relative">
          <div className="flex items-center justify-between">
            <h2 className="md:text-2xl font-medium">Clients</h2>
            <button
              onClick={handleAddClientopen}
              className="border-2 text-[#0C46D3] border-[#0C46D3] bg-white py-4 px-5 rounded-xl"
            >
              Add New Client
            </button>
          </div>
          <DeleteTable />
        </div>
        {addclients && (
          <AddClients
            Addclients={addclients}
            Setaddclients={Setaddclients}
            handleAddClientclose={handleAddClientclose}
          />
        )}
      </div>
    </>
  );
};

export default Clients;