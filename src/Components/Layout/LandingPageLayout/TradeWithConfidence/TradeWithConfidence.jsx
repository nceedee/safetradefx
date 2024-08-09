import React from "react";
import { Link } from "react-router-dom";

const TradeWithConfidence = () => {
  return (
    <div className="bg-white p-6">
      <div className="w-[70%] lg:w-[70%] m-auto py-10">
        <div className="justify-center items-center text-center space-y-5">
          <div className="flex flex-col space-y-4">
            <h1 className="text-4xl">
              Trade with confidence. Trade with Safe Trade FX.
            </h1>
            <p>
              Join thousands of people who choose to trade with us, enjoying
              over 100 instruments including 24/7 trading of Digital Assets.
            </p>
          </div>
          <button className="bg-[#ff5722] text-white p-2 rounded-sm">
            <Link to="/signup">Open account</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TradeWithConfidence;
