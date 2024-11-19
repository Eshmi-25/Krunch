import React, { useEffect } from "react";
import { useState } from "react";
import OrderDisplayCard from "../../components/OrderDisplayCard";
import NavigateLinks from "../../components/NavigateLinks";
import HeadBanner from "../../components/HeadBanner";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const ViewOrders = () => {
  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("token");
      const tokenData = jwtDecode(token);
      const email = tokenData.email;
      const fc_no = parseInt(email.match(/fc(\d+)/)[1]);
      setFcId(fc_no);
      console.log(fc_no);

      await axios.get(`http://localhost:3000/fc/getOrders/${fc_no}`, {
        headers: {
          "token": token
        }
      }).then((response)=>{
        console.log(response.data)
        setOrders(response.data);
      }).catch((err)=>{
        console.log(err);
        alert("An error occurred in fetching orders");
      })
    };
    fetchOrders();
  }, []);

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
  const [orders, setOrders] = useState([]);
  return (
    <div className="bg-primary min-h-screen min-w-screen flex flex-col p-10">
      <div className="flex justify-between">
        <HeadBanner title="Know Your Orders" subtitle={"Food court: " + fcId} />
        <NavigateLinks
          navOption="item availability"
          navLink="/editItemAvailability"
        />
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
          {orders && orders.map((order, idx) => (
            <OrderDisplayCard
              key={idx}
              name={order.email}
              orderid={order.order_no}
              roll={order.email.split("@")[0]}
              phone={order.phone_no}
              items={order.order_details}
              receipt={""}
              picked={order.delivered}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewOrders;
