import React from "react";

const Reviews = ({ img, comment, name }) => {
  return (
    <div className="flex lg:flex-row  flex-col items-center justify-center space-x-5">
      <img
        src={img}
        alt=""
        className="w-[300px] border-4 border-white object-cover h-[300px] rounded-full"
      />
      <div className="flex flex-col">
        <p className="font-bold">{comment}</p>
        <span className="text-[#ff5722]"> -{name}</span>
      </div>
    </div>
  );
};

export default Reviews;
