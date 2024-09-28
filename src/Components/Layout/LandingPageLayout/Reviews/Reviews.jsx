import React from "react";

const Reviews = ({ img, position, name }) => {
  return (
    <div className="flex lg:flex-row  flex-col items-center justify-center space-x-5">
      <div className="bg-gray-100 rounded-full">

      <img
        src={img}
        alt=""
        className="w-[300px] border-4 border-white object-fit h-[300px] rounded-full"
      />
      </div>
      <div className="flex flex-col">
        <p className="font-bold text-black ">{position}</p>
        <span className="text-[#ff5722]"> -{name}</span>
      </div>
    </div>
  );
};

export default Reviews;
