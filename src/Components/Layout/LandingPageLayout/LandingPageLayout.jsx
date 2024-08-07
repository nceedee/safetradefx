import React from "react";
import LandingPageHeader from "./LandingPageLayoutHeader/LandingPageHeader";
import NewToTrading from "./NewToTrading/NewToTrading";
import TransactionTable from "./TransactionTable/TransactionTable";
import InvestCard from "../../Global/InvestCard/InvestCard";
import { Link } from "react-router-dom";
import StockCard from "../../Global/StockCard/StockCard";
import img1 from "../../../Assets/Images/Img11.jpg";
import img2 from "../../../Assets/Images/Img33.jpg";
import img3 from "../../../Assets/Images/Img22.jpg";

const LandingPageLayout = () => {
  return (
    <div>
      <LandingPageHeader />
      <div className="-translate-y-72 flex flex-col items-center">
        <div className="w-full sm:w-[75%] text-white md:w-[50%] ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Trade Stocks, Forex, Options and Crypto
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mt-4">
            Join millions who have already discovered smarter investing in
            multiple types of assets. Choose an investment product to
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-8">
          <StockCard
            head="Stocks & ETFs"
            text="20% commission means there’ll be markup on stocks & ETFs – no matter how much you invest"
            btn="Invest In Stocks"
            image={img1}
          />
          <StockCard
            head="Crypto"
            text="Buy, sell and store Bitcoin and other leading cryptos with ease"
            btn="Buy Crypto"
            image={img3}
          />
          <StockCard
            head="CFD Trading"
            text="Go long or short on FX from just 1 pip. Trade commodities and indices with flexible leverage."
            btn="Trade Now"
            image={img2}
          />
        </div>

        <div className="mt-10">
          <NewToTrading />
          <TransactionTable />
          <Link
            to="/signup"
            className="w-full lg:w-[70%] justify-center m-auto flex flex-wrap gap-4"
          >
            <InvestCard
              name="STARTER PLAN"
              from="50"
              to="999"
              percent="5%"
              hours="20"
              className="bg-white text-black shadow-lg w-[300px]"
            />
            <InvestCard
              name="MINI PLAN"
              from="250"
              to="1500"
              percent="7.3%"
              hours="24"
              className="bg-white text-black shadow-lg w-[300px]"
            />
            <InvestCard
              name="PROFESSIONAL PLAN"
              from="1500"
              to="3000"
              percent="9.99%"
              hours="40"
              className="bg-white text-black shadow-lg w-[300px]"
            />
            <InvestCard
              name="PROMO PLAN"
              from="3000"
              to="9000"
              percent="9%"
              hours="10"
              className="bg-white text-black w-[300px]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPageLayout;
