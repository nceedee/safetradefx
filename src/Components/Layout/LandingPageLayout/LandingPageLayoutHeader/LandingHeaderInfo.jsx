import React from "react";
import safetrade from "../../../../Assets/Images/safetrade.png";

const LandingHeaderInfo = () => {
  return (
    <div className="text-center w-[90%] lg:w-[70%] flex space-y-4 flex-col items-center">
      <img
        src={safetrade}
        alt=""
        className="rounded-full w-20 h-20 lg:w-40 lg:h-40"
      />
      <h1 className="text-white text-2xl lg:text-5xl font-bold w-[100%] lg:w-[60%]">
        Wealth & Investment Management Solutions
      </h1>
      <p className="text-white text-1xl w-[100%] lg:w-[60%]">
        Invest in an industry leader, professional, and reliable company.
      </p>
      <button className="bg-blue-500 text-white w-28 lg:w-40 text-[12px] lg:text-1xl font-bold h-8 lg:h-10 rounded-sm">
        Learn more
      </button>
    </div>
  );
};

export default LandingHeaderInfo;
