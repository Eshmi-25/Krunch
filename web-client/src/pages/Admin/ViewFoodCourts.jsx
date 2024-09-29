import React, { useState } from "react";
import FoodCourtList from "../../components/FoodCourtList";
import AdminNavigateLinks from "../../components/AdminNavigateLinks";
import HeadBanner from "../../components/HeadBanner";

const ViewFoodCourts = () => {
  const [foodCourts, setFoodCourts] = useState([
    {
      fc_no: 10,
      campus: 17,
      landmark: "MBA Garden",
      maplink: "https://google.com",
    },
    {
      fc_no: 10,
      campus: 17,
      landmark: "MBA Garden",
      maplink: "https://google.com",
    },
  ]);
  
  const [adminName, setAdminName] = useState("Admin")
  const titles = ["FC No.", "Campus", "Landmark", "Map Link", "Options"];
  const [subtitle, setSubtitle] = useState("Mr/Ms/Mrs. " + adminName);


  return (
    <div className="bg-primary min-h-screen min-w-screen flex flex-col p-10">
      <div className="flex justify-between">
        <HeadBanner title="All Food Courts" subtitle={subtitle}/>
        <AdminNavigateLinks navOption1="add new FC" navLink1="/addNewFoodCourt" navOption2="add new item" navLink2="/addNewItem"/>
      </div>
      <div className="bg-secondary text-accentwhite cabin mt-6 rounded-md py-5">
        <div className="grid grid-cols-5 text-center">
          {titles.map((title, idx) => (
            <div key={idx}>{title}</div>
          ))}
        </div>
        <div className="px-8">
          <div className="bg-accentwhite w-full h-1 mt-4 rounded-md"></div>
        </div>
        <div className="mt-10 text-center">
          {foodCourts.map((foodCourt, idx) => (
            <FoodCourtList key={idx} foodCourt={foodCourt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewFoodCourts;
