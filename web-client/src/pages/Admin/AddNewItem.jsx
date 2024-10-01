import React, { useState } from "react";
import HeadBanner from "../../components/HeadBanner";
import AdminNavigateLinks from "../../components/AdminNavigateLinks";
import { IoMdAdd } from "react-icons/io";
import { GrPowerReset } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const AddNewItem = () => {
  const [adminName, setAdminName] = useState("Admin");
  const [subtitle, setSubtitle] = useState("Mr/Ms/Mrs. " + adminName);
  const [foodType, setFoodType] = useState("");
  const [VegChecked, setvegChecked] = useState(false);
  const [NonVegChecked, setNonVegChecked] = useState(false);
  // const [NonVegChecked, setNonVegChecked] = useState(false);

  const nav = new useNavigate();
  return (
    <div className="bg-primary min-h-screen min-w-screen flex flex-col p-10">
      <div className="flex justify-between">
        <HeadBanner title="Add New Item" subtitle={subtitle} />
        <AdminNavigateLinks
          navOption1="View All FCs"
          navLink1="/viewFoodCourts"
          navOption2="Add new FCs"
          navLink2="/addNewFoodCourt"
        />
      </div>
      <form action="" className="flex justify-center">
        <div className="bg-secondary text-accentwhite  w-1/3 cabin mt-6 rounded-md py-5 px-10 ">
          <div className="grid grid-rows-3 gap-4 mt-5">
            <div>
              <label htmlFor="it_na">Item Name</label>
              <input required
                type="text"
                name="it_na"
                id="it_na"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-tertiary text-accentgreen bg-accentwhite cabin"
              />
            </div>
            
            <div>
              <label htmlFor="price">Price</label>
              <input required
                type="text"
                name="price"
                id="price"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-tertiary text-accentgreen bg-accentwhite cabin"
              />
            </div>

            <div className="grid grid-cols-2">
              <div className="flex items-center justify-center gap-2">
                <input 
                  type="checkbox"
                  checked={VegChecked}
                  onChange={() => {
                    setFoodType("VEG");
                    setvegChecked(true);
                    setNonVegChecked(false);
                  }}
                />
                <label>VEG</label>
              </div>
              <div className="flex items-center justify-center gap-2">
                <input 
                  type="checkbox"
                  checked={NonVegChecked}
                  onChange={() => {
                    setFoodType("Non Veg");
                    setNonVegChecked(true);
                    setvegChecked(false);
                  }}
                />
                <label>Non Veg</label>
              </div>
            </div>
          </div>
          <div className="px-5 mt-10">
            <div className="bg-accentwhite w-full h-1 mt-4 rounded-md"></div>
          </div>
          <div className="mt-5 mb-5 text-center flex items-center justify-center gap-5">
            <button className="bg-tertiary text-accentgreen shadow-md hover:bg-accentgreen hover:text-accentwhite p-2 rounded-md">
              <div className="flex items-center gap-2">
                <IoMdAdd />
                Add
              </div>
            </button>
            <button className="bg-tertiary text-accentgreen shadow-md hover:bg-accentgreen hover:text-accentwhite p-2 rounded-md">
            <div className="flex items-center gap-2">
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
