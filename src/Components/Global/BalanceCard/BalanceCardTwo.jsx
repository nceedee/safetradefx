import React from "react";

const BalanceCardTwo = ({ icon, text, amount, className }) => {
  return (
    <div
      className={`flex items-center  rounded-md  p-4 bg-[#202b5d] ${className}`}
    >
      <div>{icon}</div>
      <div>
        <h1 className="text-[16px]">{text}</h1>
        <p>{amount}</p>
      </div>
    </div>
  );
};

export default BalanceCardTwo;
