import React from "react";
import Points from "../Points/Points";
import LandingContinues from "../LandingContinues/LandingContinues";

const AchievedMission = () => {
  return (
    <div className="flex flex-col ">
      <div
        className="bg-black  text-white w-[50%] relative mr-10 p-20 self-end"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
      >
        <h4 className="text-xl font-semibold mb-2">
          HOW WE ACHIEVED THIS MISSION
        </h4>
        <h1 className="text-6xl font-bold mb-4">
          Professional solutions for digital asset investors
        </h1>
        <p className="mb-4">
          At Safe Trade FX, our mission is to expand access to the digital asset
          ecosystem while serving as trusted partners for our clients.
        </p>
        <button className="bg-blue-500  text-white font-bold px-4 py-2 rounded">
          Contact us
        </button>
      </div>
      <LandingContinues />
    </div>
  );
};

export default AchievedMission;
