import React, { useState } from "react";
import InvestmentModal from "../InvestmentModal/InvestmentModal";

const InvestCardTwo = ({ name, from, to, percent, hours, className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleInvestClick = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  return (
    <div
      className={`p-6 flex flex-col space-y-4 items-center lg:m-0 m-auto rounded-md lg:w-[300px] translate-y-6 w-[85%] shadow-md `}
    >
      <h1 className="font-bold text-3xl text-black">{name}</h1>
      <h1 className="text-3xl text-gray-300">
        ${from} - ${to}
      </h1>
      <div className="flex items-center space-x-2 border-b-[1px]">
        <h1 className="font-bold text-3xl text-black">{percent}</h1>
        <p className="text-black">Every After {hours} Hours</p>
      </div>
      <p className="text-black">Profit For Every After</p>
      <p className="text-black">{hours} Hours</p>
      <div>
        <p className="text-black">
          Capital will back:{" "}
          <span className="text-black bg-[#609c46] p-1 text-[12px] rounded-md">
            Yes
          </span>
        </p>
        <p className="text-black">
          Total {percent} +{" "}
          <span className="text-black bg-[#609c46] p-1 text-[12px] rounded-md">
            Yes
          </span>
        </p>
      </div>
      <button
        className="border-[1px] p-3 rounded-[30px] hover:bg-black hover:text-white hover:animate-pulse"
        onClick={() => handleInvestClick({ name, from, to, percent, hours })}
      >
        Invest Now
      </button>
      {selectedPlan && (
        <InvestmentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          investmentPlan={selectedPlan}
        />
      )}
    </div>
  );
};

export default InvestCardTwo;
