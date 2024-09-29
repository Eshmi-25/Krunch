import React from "react";
import kiitlogo from "../assets/kiitlogo.svg";

const HeadBanner = ({title, subtitle}) => {
  return (
    <div className="flex items-center gap-6">
      <div className="bg-accentgreen rounded-full p-2">
        <img src={kiitlogo} alt="kiit" className="h-20 w-20" />
      </div>
      <div>
        <h2 className="text-5xl text-accentgreen font-semibold">
          {title}
        </h2>
        <p className="text-accentgreen text-xl">{subtitle}</p>
      </div>
    </div>
  );
};

export default HeadBanner;
