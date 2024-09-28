import React from "react";
import { useState } from "react";
import kiitlogo from "../../assets/kiitlogo.svg";
import NavigateLinks from "../../components/NavigateLinks";
import { IoMdSearch } from "react-icons/io";
import ItemList from "../../components/ItemList";

const EditItemAvailability = () => {
  const [fcId, setFcId] = useState(1);
  const titles = ["Item ID", "Item Name", "Unit Price", "Available"];
  const [itemList, setItemList] = useState([
    { id: 1, name: "Burger", unitPrice: 100, available: true },
    { id: 2, name: "Pizza", unitPrice: 100, available: false },
    { id: 3, name: "Pasta", unitPrice: 100, available: true },
    { id: 4, name: "Sandwich", unitPrice: 100, available: false },
    { id: 5, name: "Noodles", unitPrice: 100, available: true },
    { id: 5, name: "Noodles", unitPrice: 100, available: true },
    { id: 5, name: "Noodles", unitPrice: 100, available: true },
    { id: 5, name: "Noodles", unitPrice: 100, available: true },
  ]);

  const handleSearch = (e) => {
    e.preventDefault();
    alert("button clicked");
  };

  return (
    <div className="bg-primary max-h-screen min-w-screen flex flex-col p-10 overflow-hidden">
      {/* Fixed Top Header */}
      <div className="flex justify-between mb-2">
        <div className="flex items-center gap-6">
          <div className="bg-accentgreen rounded-full p-2">
            <img src={kiitlogo} alt="kiit" className="h-20 w-20" />
          </div>
          <div>
            <h2 className="text-5xl text-accentgreen font-semibold">
              Edit Item Availability
            </h2>
            <p className="text-accentgreen text-xl">Food court: {fcId}</p>
          </div>
        </div>
        <NavigateLinks navOption="view orders" navLink="/vieworders" />
      </div>

      {/* Search Bar */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <form
          onSubmit={handleSearch}
          className="w-full flex items-center justify-center gap-2"
        >
          <input
            type="text"
            className="w-1/2 px-3 py-2 shadow-md rounded-md focus:outline-none focus:ring focus:ring-tertiary text-accentgreen bg-accentwhite cabin"
            placeholder="Search for items"
          />
          <button type="submit">
            <IoMdSearch className="text-5xl hover:bg-secondary hover:text-accentwhite rounded-full p-2 text-accentgreen" />
          </button>
        </form>
      </div>

      {/* Scrollable Item List Container */}
      <div className="px-10 flex-1 mb-2">
        <div className="mt-2 bg-secondary cabin text-accentwhite rounded-md py-5 overflow-hidden max-h-full ">
            {/* Titles */}
            <div className="grid grid-cols-4">
              {titles.map((title, idx) => (
                <div key={idx} className="p-2 text-center">
                  {title}
                </div>
              ))}
            </div>

            <div className="px-5">
              <div className="bg-accentwhite w-full h-1 mt-1 rounded-md"></div>
            </div>
          {/* Scrollable Item List */}
          <div className="h-64 overflow-y-auto">
            {" "}
            {/* Set a fixed height for scrolling */}
            {itemList.map((item, idx) => (
              <ItemList
                key={idx}
                id={item.id}
                name={item.name}
                unitPrice={item.unitPrice}
                available={item.available}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditItemAvailability;
