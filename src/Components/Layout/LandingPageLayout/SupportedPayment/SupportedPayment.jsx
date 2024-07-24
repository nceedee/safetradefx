import React from "react";
import btc from "../../../../Assets/Images/btc.png";
import eth from "../../../../Assets/Images/eth.png";
import doge from "../../../../Assets/Images/doge.png";

const SupportedPayment = () => {
  return (
    <div className="flex flex-col justify-center pt-20 border-t space-y-14 items-center">
      <div className="w-[60%] text-center">
        <h1 className="font-bold text-2xl lg:text-4xl">
          Some Of Our Supported Payment Gateways
        </h1>
        <p>We are cryptocurrencies and other digital assets.</p>
      </div>
      <div className="flex justify-around items-center text-center font-bold text-[12px] lg:text-2xl w-[60%]">
        <div>
          <img
            src={btc}
            alt=""
            className="w-16 h-16 lg:w-20 lg:h-20 bg-blue-700 m-4 rounded-3xl"
          />
          <h2>Bitcoin</h2>
        </div>
        <div>
          <img
            src={doge}
            alt=""
            className="w-16 h-16 lg:w-20 lg:h-20 bg-blue-700 m-4 rounded-3xl"
          />
          <h2>Dogecoin</h2>
        </div>
        <div>
          <img
            src={eth}
            alt=""
            className="w-16 h-16 lg:w-20 lg:h-20 bg-blue-700 m-4 rounded-3xl"
          />
          <h1>Ethereum</h1>
        </div>
      </div>
    </div>
  );
};

export default SupportedPayment;
