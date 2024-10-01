import React, { useState } from "react";
import HeadBanner from "../../components/HeadBanner";
import AdminNavigateLinks from "../../components/AdminNavigateLinks";
import { IoMdAdd } from "react-icons/io";
import { GrPowerReset } from "react-icons/gr";

const AddNewFoodCourt = () => {
  const [adminName, setAdminName] = useState("Admin");
  const [subtitle, setSubtitle] = useState("Mr/Ms/Mrs. " + adminName);
  return (
    <div className="bg-primary min-h-screen min-w-screen flex flex-col p-10">
      <div className="flex justify-between">
        <HeadBanner title="Add New Food Court" subtitle={subtitle} />
        <AdminNavigateLinks
          navOption1="View All FCs"
          navLink1="/viewFoodCourts"
          navOption2="add new item"
          navLink2="/addNewItem"
        />
      </div>
      <form action="">
        <div className="bg-secondary text-accentwhite cabin mt-6 rounded-md py-5 px-10">
          <div className="grid grid-cols-2 gap-4 mt-5">
            <div>
              <label htmlFor="fc_no">Food Court Number</label>
              <input required
                type="text"
                name="fc_no"
                id="fc_no"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-tertiary text-accentgreen bg-accentwhite cabin"
              />
            </div>
            <div>
              <label htmlFor="campus">Campus</label>
              <input required
                type="text"
                name="campus"
                id="campus"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-tertiary text-accentgreen bg-accentwhite cabin"
              />
            </div>
            <div>
              <label htmlFor="landmark">Landmark</label>
              <input required
                type="text"
                name="landmark"
                id="landmark"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-tertiary text-accentgreen bg-accentwhite cabin"
              />
            </div>
            <div>
              <label htmlFor="maplink">Map Link</label>
              <input required
                type="text"
                name="maplink"
                id="maplink"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-tertiary text-accentgreen bg-accentwhite cabin"
              />
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="githubLink">Github Link</label>
            <input required
              type="text"
              name="githubLink"
              id="githubLink"
              className=" w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-tertiary text-accentgreen bg-accentwhite cabin"
            />
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

export default AddNewFoodCourt;
