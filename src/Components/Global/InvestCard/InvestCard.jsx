import React, { useState } from "react";
import InvestmentModal from "../InvestmentModal/InvestmentModal";

const InvestCard = ({ name, from, to, percent, hours, className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInvestNowClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div
      className={`p-6 flex flex-col space-y-4 items-center lg:m-0 m-auto rounded-md ${className}`}
    >
      <h1 className="font-bold text-3xl text-white">{name}</h1>
      <h1 className="text-3xl text-gray-300">
        ${from} - ${to}
      </h1>
      <div className="flex items-center space-x-2 border-b-[1px]">
        <h1 className="font-bold text-3xl text-white">{percent}</h1>
        <p className="text-white">Every After {hours} Hours</p>
      </div>
      <p className="text-white">Profit For Every After</p>
      <p className="text-white">{hours} Hours</p>
      <div>
        <p className="text-white">
          Capital will back:{" "}
          <span className="text-white bg-[#609c46] p-1 text-[12px] rounded-md">
            Yes
          </span>
        </p>
        <p className="text-white">
          Total {percent} +{" "}
          <span className="text-white bg-[#609c46] p-1 text-[12px] rounded-md">
            Yes
          </span>
        </p>
      </div>
      <button
        className="border-[1px] p-3 rounded-[30px] hover:bg-white hover:text-black hover:animate-pulse"
        onClick={handleInvestNowClick}
      >
        Invest Now
      </button>
      <InvestmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default InvestCard;
