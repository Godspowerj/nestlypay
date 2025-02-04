import React, { useState } from "react";
import DeleteTable from "../../Components/DeleteTable";
import AddClients from "../../Components/AddClients";
import { MyContext } from "../../ContextFolder/ContextApi";
import { useContext } from "react";
import EditClient from "../../Components/EditClient";
const Clients = () => {
  const {handEditClient,SethandEditClient, addclients, Setaddclients, handleaddClientopen } =
    useContext(MyContext);

  return (
    <>
      <div>
        <div className="space-y-10 min-h-screen relative">
          <div className="flex items-center justify-between">
            <h2 className="md:text-2xl font-medium">Clients</h2>
            <button
              onClick={handleaddClientopen}
              className="border-2 text-[#0C46D3] border-[#0C46D3] bg-white py-4 px-5 rounded-xl"
            >
              Add New Client
            </button>
          </div>
          <DeleteTable />
        </div>
        {addclients && <AddClients />}

       {handEditClient && <EditClient/> }
        
      </div>
    </>
  );
};

export default Clients;
