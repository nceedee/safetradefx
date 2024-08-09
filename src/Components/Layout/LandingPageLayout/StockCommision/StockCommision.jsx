import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { TbCloudComputing } from "react-icons/tb";
import { SiGnuprivacyguard } from "react-icons/si";

const StockCommision = () => {
  return (
    <div className="bg-white p-6 translate-y-16">
      <div className="w-[70%] lg:w-[70%] m-auto mt-28 text-gray-800 flex flex-col space-y-28">
        <div>
          <h1 className="text-4xl">100% stocks, 20% commission</h1>
          <p>
            20% commission means there’ll be markup on stocks & ETFs – no matter
            how much you invest. Invest in a large variety of stocks on
            Fusionxace and experience unlimited trading volume.
          </p>
        </div>
        <div className="text-center">
          <h1 className="text-4xl">The global leader of profitable trading</h1>
          <p>
            Discover why millions of users from over 140 countries choose to
            trade with Fusionxace
          </p>
          <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-8 lg:space-x-10 mt-10 space-x-0">
            <div className="flex flex-col items-center">
              <div className="rounded-full border-r-4 p-8 border-red-500">
                <FaRegFileAlt className="text-8xl text-blue-900" />
              </div>
              <h1 className="text-4xl mt-4 text-blue-900">Regulated</h1>
              <p>Our company is regulated by the FCA and CySec</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full border-r-4 p-8 border-red-500">
                <TbCloudComputing className="text-8xl text-blue-900" />
              </div>
              <h1 className="text-4xl mt-4 text-blue-900">Swift & Reliable</h1>
              <p>
                Our API and trading equiptments are fast, reliable and easy to
                use accros multiple platforms
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full border-r-4 p-8 border-red-500">
                <SiGnuprivacyguard className="text-8xl text-blue-900" />
              </div>
              <h1 className="text-4xl mt-4 text-blue-900">Privacy</h1>
              <p>
                We will never share your private data without your permission
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockCommision;
