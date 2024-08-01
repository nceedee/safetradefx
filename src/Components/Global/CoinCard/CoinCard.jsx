import React from "react";

const CoinCard = ({ img, onClick }) => {
  return (
    <div
      className="bg-[#202b5d] w-32 m-auto h-44 rounded-md space-y-3 flex flex-col items-center p-4 text-white text-center cursor-pointer"
      onClick={onClick}
    >
      <img src={img} alt="coin" width={100} />
      <button className="bg-blue-500 p-2 rounded-md text-white">Pay Now</button>
    </div>
  );
};

export default CoinCard;
