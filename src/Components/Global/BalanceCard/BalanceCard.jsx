import React from 'react';

export const BalanceCard = ({ icon, text, amount }) => {
  return (
    <div className="bg-primary1 text-white md:gap-0 gap-2 rounded-lg shadow-lg p-4 w-full flex flex-col items-center text-center mx-2">
      <div className="text-3xl text-white mb-2">{icon}</div>
      <div className="bg-white text-black rounded-full md:px-4 px-6 py-1 text-1xl lg:text-sm font-bold mb-2">
        {text}
      </div>
      <div className="md:text-xl text-2xl  font-semibold">{amount}</div>
    </div>
  );
};
