import React from "react";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

const OrderDisplayCard = ({
  name,
  orderid,
  roll,
  phone,
  items,
  receipt,
  picked,
}) => {
  const [pickedUp, setPickedUp] = useState(picked);
  const [itemListExpand, setItemListExpand] = useState(false);

  const handlePickUp = (e) => {
    e.preventDefault();
    if (pickedUp) {
      alert("Order already picked up");
    }
    setPickedUp(true);
  };
  return (
    <div className="grid grid-cols-7 bg-secondary px-8 py-5 rounded-lg items-start">
      <div className="text-sm text-accentwhite text-wrap">{name}</div>
      <div className="text-sm text-accentwhite text-wrap">{roll}</div>
      <div className="text-sm text-accentwhite text-wrap">{orderid}</div>
      <div className="text-sm text-accentwhite text-wrap">{phone}</div>
      <div className="text-sm text-accentwhite text-wrap">
        <div
          onClick={() => {
            setItemListExpand(!itemListExpand);
          }}
        >
          <div className="flex items-center gap-2 hover:cursor-pointer">
            <FaAngleRight
              className={`${itemListExpand ? "hidden" : "block"}`}
            />
            <FaAngleDown className={`${itemListExpand ? "block" : "hidden"}`} />
            View List
          </div>
        </div>
        <div className={`${itemListExpand ? "block" : "hidden"} mt-2`}>
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between pr-10 items-center mt-2 "
            >
              <div>{item.item_name} </div>
              <div>{item.qty}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-sm text-accentwhite text-wrap">
        <a href={receipt}>View Receipt</a>
      </div>
      <div
        className="text-sm text-accentwhite text-wrap"
        onClick={handlePickUp}
      >
        <div className="w-6 h-6 rounded-lg bg-accentwhite flex items-center justify-center text-xl">
          <TiTick
            className={`${pickedUp ? "block" : "hidden"} text-accentgreen`}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderDisplayCard;
