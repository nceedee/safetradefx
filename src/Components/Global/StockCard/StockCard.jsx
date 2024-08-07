import React from "react";

const StockCard = ({ head, text, btn, image }) => {
  return (
    <div className="bg-white rounded-md lg:w-[300px] w-[90%] m-auto shadow-lg flex flex-col space-y-3 p-4 text-gray-700">
      <h1 className="font-bold text-2xl">{head}</h1>
      <p>{text}</p>
      <button
        disabled
        title="feature not yet available"
        className="bg-[#ff5722] text-white p-2 self-start rounded-sm"
      >
        {btn}
      </button>
      <img src={image} alt="" />
    </div>
  );
};

export default StockCard;