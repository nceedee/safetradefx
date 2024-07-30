import React from "react";

const BadgesCard = ({
  badge,
  level,
  text,
  amountOne,
  amountTwo,
  amountThree,
}) => {
  return (
    <div className="flex flex-col space-y-6 rounded-md bg-[#202b5d] lg:w-64  w-full p-6 items-center justify-center">
      <img src={badge} alt="" />
      <h1 className="font-bold text-3xl">{level}</h1>
      <p className="text-[13px]">{text}</p>
      <div className="flex flex-col">
        <div className="flex space-x-1">
          <p>Minimum Invest:</p>
          <p>{amountOne}</p>
        </div>
        <div className="flex space-x-1">
          <p>Minimum Deposit:</p>
          <p>{amountTwo}</p>
        </div>
        <div className="flex space-x-1">
          <p>Minimum Earning:</p>
          <p>{amountThree}</p>
        </div>
      </div>
    </div>
  );
};

export default BadgesCard;
