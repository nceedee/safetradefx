import React from "react";
import Points from "../Points/Points";
import LandingContinues from "../LandingContinues/LandingContinues";

const AchievedMission = () => {
  return (
    <div>
      <div className="flex flex-col p-4 lg:p-0">
        <div
          className="bg-black  text-white w-[100%] lg:w-[60%] relative mr-0 lg:mr-10 p-8 lg:p-20 self-end"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
        >
          <h4 className="text-[12px] lg:text-xl font-semibold mb-2">
            HOW WE ACHIEVED THIS MISSION
          </h4>
          <h1 className="text-3xl lg:text-6xl font-bold mb-4">
            Professional solutions for digital asset investors
          </h1>
          <p className="text-[12px] lg:text-[16px] mb-4">
            At Safe Trade FX, our mission is to expand access to the digital
            asset ecosystem while serving as trusted partners for our clients.
          </p>
          <button className="bg-blue-500 text-[12px] lg:text-[16px] text-white font-bold px-4 py-2 rounded">
            Contact us
          </button>
        </div>
      </div>
        <LandingContinues />
    </div>
  );
};

export default AchievedMission;
