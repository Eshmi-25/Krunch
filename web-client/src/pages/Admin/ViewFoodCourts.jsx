import React, { useState } from "react";
import kiitlogo from "../../assets/kiitlogo.svg";
import NavigateLinks from "../../components/NavigateLinks";

const ViewFoodCourts = () => {
  const [foodCourts, setFoodCourts] = useState([
    {
      fc_no: 10,
      campus: 17,
      landmark: "MBA Garden",
      maplink: "https://google.com",
    },
  ]);
  const titles = ["FC No.", "Campus", "Landmark", "Map Link", "Options"];
  return (
    <div className="bg-primary min-h-screen min-w-screen flex flex-col p-10">
      <div className="flex justify-between">
        <div className="flex items-center gap-6">
          <div className="bg-accentgreen rounded-full p-2">
            <img src={kiitlogo} alt="kiit" className="h-20 w-20" />
          </div>
          <div>
            <h2 className="text-5xl text-accentgreen font-semibold">
              All Food Courts
            </h2>
            <p className="text-accentgreen text-xl">Mr./Ms./Mrs. Admin</p>
          </div>
        </div>
        <NavigateLinks navOption="add new FC" navLink="/addNewFoodCourt" />
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
      </div>
    </div>
  );
};

export default ViewFoodCourts;
