import React from "react";

const BalanceCard = ({ icon, text, amount, className }) => {
  return (
    <div
      className={`flex rounded-md flex-col space-y-8 p-4 bg-[#202b5d] ${className}`}
    >
      <div>{icon}</div>
        <h1 className="text-[16px]">{text}</h1>
        <p>{amount}</p>
    </div>
  );
};

export default BalanceCard;
