import React from "react";
import { useState } from "react";
import kiitlogo from "../../assets/kiitlogo.svg";
import OrderDisplayCard from "../../components/OrderDisplayCard";
import NavigateLinks from "../../components/NavigateLinks";

const ViewOrders = () => {
  const [fcId, setFcId] = useState(1);
  const titles = [
    "name",
    "roll no",
    "order id",
    "phone",
    "items",
    "e-receipt",
    "picked up",
  ];
  const [orders, setOrders] = useState([
    {
      name: "Annesha Mukhopadhyay",
      roll: "2105895",
      orderid: "2",
      phone: "7908967455",
      items: [
        ["Burger", 1],
        ["Pizza", 2],
        ["Chicken Chowmein", 2],
      ],
      receipt: "https://www.google.com",
      picked: false,
    },
    {
      name: "Annesha Mukhopadhyay",
      roll: "2105895",
      orderid: "6",
      phone: "6534223490",
      items: [
        ["Burger", 1],
        ["Pizza", 2],
        ["Chicken Chowmein", 2],
      ],
      receipt: "https://www.google.com",
      picked: false,
    },
  ]);
  return (
    <div className="bg-primary min-h-screen min-w-screen flex flex-col p-10">
      <div className="flex justify-between">
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
        <NavigateLinks navOption="item availability" navLink="/editItemAvailability"/>
      </div>
      <div className="mt-8 px-8 flex flex-col">
        <div className="grid grid-cols-7 px-8">
          {titles.map((title, idx) => (
            <label
              key={idx}
              className="text-md cabin text-accentgreen capitalize"
            >
              {title}
            </label>
          ))}
        </div>
        <div className="bg-accentgreen w-full h-1 mt-4"></div>
        <div className="mt-4 cabin flex flex-col gap-10">
          {orders.map((order, idx) => (
            <OrderDisplayCard
              key={idx}
              name={order.name}
              orderid={order.orderid}
              roll={order.roll}
              phone={order.phone}
              items={order.items}
              receipt={order.receipt}
              picked={order.picked}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewOrders;
