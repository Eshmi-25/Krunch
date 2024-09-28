import React from 'react'
import { useState } from "react";
import kiitlogo from "../../assets/kiitlogo.svg";
import NavigateLinks from "../../components/NavigateLinks";

const EditItemAvailability = () => {
  const [fcId, setFcId] = useState(1);
  return (
    <div className='bg-primary min-h-screen min-w-screen flex flex-col p-10'>
      <div className="flex justify-between">  {/*  Top part starts */}
        <div className='flex items-center gap-6'>
          <div className="bg-accentgreen rounded-full p-2">
            <img src={kiitlogo} alt="kiit" className="h-20 w-20" />
          </div>
          <div>
            <h2 className="text-5xl text-accentgreen font-semibold">
              Know your orders
            </h2>
            <p className="text-accentgreen text-xl">Food court: {fcId}</p> 
          </div>
        </div>
        <NavigateLinks navOption="view orders" navLink="/vieworders"/>
      </div>    {/*  Top part ends */}
      <div>
        SEARCH
      </div>
      <div>
        ITEMS
      </div>
    </div>
  )
}

export default EditItemAvailability