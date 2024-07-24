import React from "react";
import underlineimg from "../../../../Assets/Images/h6-sub-divider-img.png";
import { ServiceSteps } from "./ServiceSteps";

const Services = () => {
  return (
    <div className="text-center flex flex-col space-y-7 lg:space-y-20 pt-20 ">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-blue-700 font-bold text-1xl lg:text-2xl ">Services</h3>
        <img src={underlineimg} alt="" className=" w-[50px] lg:w-[80px]" />
      </div>
      <div className="w-[90%] lg:w-[60%] m-auto">
        <h1 className="text-black font-bold text-2xl lg:text-5xl ">
          Comprehensive services we{" "}
          <span className="text-blue-700">provide</span>.
        </h1>
        <p className="text-[12px] lg:text-[16px]">
          Robust, transparent benchmarks bridging the gap between traditional
          and digital asset investment.
        </p>
      </div>
      <ServiceSteps />
    </div>
  );
};

export default Services;
