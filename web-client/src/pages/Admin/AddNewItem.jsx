import React, { useState } from "react";
import HeadBanner from "../../components/HeadBanner";
import AdminNavigateLinks from "../../components/AdminNavigateLinks";
import { IoMdAdd } from "react-icons/io";
import { GrPowerReset } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddNewItem = () => {
  const [adminName, setAdminName] = useState("");
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const token = localStorage.getItem("token");

  const nav = new useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/admin/addItem",
        {
          item_name: itemName,
          price: price,
        },
        {
          headers: {
            token: token,
          },
        }
      );
      alert("Item added");
      console.log("Item added successfully:", response.data);
    } catch (error) {
      console.error("Error adding item:", error);
      alert("Could not add item");
    }
  };

  return (
    <div className="bg-primary min-h-screen min-w-screen flex flex-col p-10">
      <div className="flex justify-between">
        <HeadBanner title="Add New Item" subtitle={adminName} />
        <AdminNavigateLinks
          navOption1="View All FCs"
          navLink1="/viewFoodCourts"
          navOption2="Add new FCs"
          navLink2="/addNewFoodCourt"
        />
      </div>
      <form action="" className="flex justify-center" onSubmit={handleSubmit}>
        <div className="bg-secondary text-accentwhite  w-1/3 cabin mt-6 rounded-md py-5 px-10 ">
          <div className="grid grid-rows-2 gap-4 mt-5">
            <div>
              <label htmlFor="it_na">Item Name</label>
              <input
                required
                type="text"
                name="it_na"
                id="it_na"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-tertiary text-accentgreen bg-accentwhite cabin"
                value={itemName}
                onChange={(e) => {
                  setItemName(e.target.value);
                }}
              />
            </div>

            <div>
              <label htmlFor="price">Price</label>
              <input
                required
                type="text"
                name="price"
                id="price"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-tertiary text-accentgreen bg-accentwhite cabin"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="px-5 mt-10">
            <div className="bg-accentwhite w-full h-1 mt-4 rounded-md"></div>
          </div>
          <div className="mt-5 mb-5 text-center flex items-center justify-center gap-5">
            <button
              className="bg-tertiary text-accentgreen shadow-md hover:bg-accentgreen hover:text-accentwhite p-2 rounded-md"
              type="submit"
            >
              <div className="flex items-center gap-2">
                <IoMdAdd />
                Add
              </div>
            </button>
            <button className="bg-tertiary text-accentgreen shadow-md hover:bg-accentgreen hover:text-accentwhite p-2 rounded-md">
              <div
                className="flex items-center gap-2"
                type="button"
                onClick={() => {
                  setItemName("");
                  setPrice("");
                }}
              >
                <GrPowerReset />
                Reset
              </div>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddNewItem;
