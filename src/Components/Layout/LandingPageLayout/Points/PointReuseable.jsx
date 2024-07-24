import React from "react";

const PointReuseable = ({ icon, heading, text }) => {
  return (
    <div>
      <div className="relative mt-[150px] hover:animate-bounce">
        <h1 className="bg-blue-500 absolute -translate-y-20 translate-x-24 lg:translate-x-32 text-white w-24 lg:w-28 lg:h-28 h-24 flex justify-center items-center rounded-full hover:animate-spin ">
          {icon}
        </h1>
        <div className="w-[300px] lg:w-[380px] text-center bg-white p-11 text-[14px] shadow-lg ">
          <h2 className="font-bold text-2xl"> {heading}</h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default PointReuseable;
