import React from "react";
import safetrade from "../../../../Assets/Images/safetrade.png";

const LandingHeaderInfo = () => {
  return (
    <div className="text-center w-[70%] flex space-y-4 flex-col items-center">
      <img src={safetrade} alt="" className="rounded-full w-40 h-40" />
        <h1 className="text-white text-5xl font-bold w-[60%]">Wealth & Investment Management Solutions</h1>
        <p className="text-white text-1xl w-[60%]">Invest in an industry leader, professional, and reliable company.</p>
        <button className="bg-blue-500 text-white w-44 text-1xl font-bold h-10 rounded-sm">Learn more</button>
    </div>
  );
};

export default LandingHeaderInfo;
