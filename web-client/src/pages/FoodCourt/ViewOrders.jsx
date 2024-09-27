import React from "react";
import { useState } from "react";
import kiitlogo from "../../assets/kiitlogo.svg";

const ViewOrders = () => {
    const [fcId, setFcId] = useState(1);
    const titles = ["name", "roll no", "order id", "phone", "items", "e-receipt", "picked up"];
  return (
    <div className="bg-primary min-h-screen min-w-screen flex flex-col p-10">
      <div className="flex items-center gap-6">
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
      <div className="mt-8 px-8 flex flex-col">
        <div className="flex justify-between px-6">
            {titles.map((title, idx) => (
                <label key={idx} className="text-md cabin text-accentgreen capitalize">{title}</label>
            ))}
        </div>
        <div className="bg-accentgreen w-full h-1 mt-4"></div>
      </div>
    </div>
  );
};

export default ViewOrders;
