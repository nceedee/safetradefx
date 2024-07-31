import React from "react";

const InvestCard = ({ name, from, to, percent, hours ,className}) => {
    return (
    <div
      className={`p-6 flex flex-col space-y-4 items-center lg:m-0 m-auto rounded-md ${className}`}
    >
      <h1 className="font-bold text-3xl">{name}</h1>
      <h1 className="text-3xl text-gray-300">
        ${from} - ${to}
      </h1>
      <div className="flex items-center space-x-2 border-b-[1px]">
        <h1 className="font-bold text-3xl">{percent}</h1>
        <p>Every After {}Hours</p>
      </div>
      <p>Profit For Every After</p>
      <p>{hours}Hours</p>
      <div>
        <p>
          Capital will back :{" "}
          <span className="text-white bg-[#609c46] p-1 text-[12px] rounded-md">
            Yes
          </span>
        </p>
        <p>
          Total {percent} +{" "}
          <span className="text-white bg-[#609c46] p-1 text-[12px] rounded-md">
            Yes
          </span>
        </p>
      </div>
      <button className="border-[1px] p-3 rounded-[30px] hover:bg-white hover:text-black hover:animate-pulse">
        Invest Now
      </button>
    </div>
  );
};

export default InvestCard;
