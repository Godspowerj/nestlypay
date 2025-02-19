import React, { createContext, useState } from "react";

// Create a context
export const MyContext = createContext();

// Create a provider component
export const MyProvider = ({ children }) => {
  const [handleDeleteCancel, SethandleDeleteCancel] = useState(false);
  const [handEditClient, SethandEditClient] = useState(false);
  const [addclients, Setaddclients] = useState(false);
  const [cancelPayment, SetcancelPayment] = useState(false)
  const [successPayment, SetsuccessPayment] = useState(false)

  // state to handle the catalog
   const [isAddProduct, SetisAddProduct] = useState(false);
   const [isProduct, SetisProduct] = useState(false);
   //functions to handle the visibility of the notification
    const handleisproductopen = () =>{
      SetisAddProduct(true);   
    }
    const handleisproductclose = () =>{
      SetisAddProduct(false)
    }
    const handleisProduct = () => {
      SetisProduct(true)
      SetisAddProduct(false);
    }
    const handleisProductclose = () => {
      SetisProduct(false)
      
    }
    
  //everything about the catalog ends here

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
  const handleaddClientopen = () => {
    Setaddclients(true);
  };
  const handleaddClientclose = () => {
    Setaddclients(false);
  };

  const contextValue = {
    handleDeleteCancel,
    SethandleDeleteCancel,
    handEditClient,
    SethandEditClient,
    handleDeleteCancelopen,
    handleDeleteCancelclose,
    handleEditClientopen,
    handleEditClientclose,
    addclients,
    Setaddclients,
    handleaddClientclose,
    handleaddClientopen,
    handleisproductopen,
    handleisproductclose,
    isAddProduct,
    isProduct,
    handleisProduct,
    handleisProductclose,
    cancelPayment,
    SetcancelPayment,
    successPayment,
    SetsuccessPayment
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};
