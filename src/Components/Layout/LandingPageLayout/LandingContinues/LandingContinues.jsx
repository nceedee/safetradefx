import React from "react";
import Points from "../Points/Points";
import { Purpose } from "../Purpose/Purpose";
import Services from "../Services/Services";

const LandingContinues = () => {
  return (
    <div>
      <div className="bg-blue-100 ">
        <Points />
      </div>
      <div>
        <Purpose />
      </div>
      <div className="bg-white">
        <Services />
      </div>
    </div>
  );
};

export default LandingContinues;
