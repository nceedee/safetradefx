import React from "react";
import { Link } from "react-router-dom";

const NewToTrading = () => {
    return (
      <div className="bg-[#383e54] lg:translate-y-52 translate-y-4 lg:w-[70%] w-[95%] m-auto p-8 rounded-md text-white">
        <h1 className="font-bold text-3xl">New to Trading?</h1>
        <p className="w-[80%] mt-2">
          Discover AM Trading™: Get help from our carefully picked experts to
          help you manage your trading account till you become a good trader.
        </p>
        <button className="bg-white text-black mt-4 p-2 rounded-sm">
          <Link to="/signup">AM TRADING™</Link>
        </button>
      </div>
    );
};

export default NewToTrading;
