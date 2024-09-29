import React from "react";
import { useState } from "react";
import { TiTick } from "react-icons/ti";

const ItemList = ({ id, name, unitPrice, available }) => {
    const [availability, setAvailability] = useState(available);
    const handleAvailability = () => {
        setAvailability(!availability);
    }
  return (
    <div className="grid grid-cols-4 py-1 mt-1">
      <div className="p-2 text-center">{id}</div>
      <div className="p-2 text-center">{name}</div>
      <div className="p-2 text-center">{unitPrice}</div>
      <div className="p-2 text-center flex justify-center items-center">
        <div
          className="text-sm text-accentwhite text-wrap"
          onClick={handleAvailability}
        >
          <div className="w-6 h-6 rounded-lg bg-accentwhite flex items-center justify-center text-xl">
            <TiTick
              className={`${availability ? "block" : "hidden"} text-accentgreen`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
