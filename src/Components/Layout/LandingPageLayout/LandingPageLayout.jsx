import React from "react";
import LandingPageHeader from "./LandingPageLayoutHeader/LandingPageHeader";
import NewToTrading from "./NewToTrading/NewToTrading";
import TransactionTable from "./TransactionTable/TransactionTable";
import InvestCard from "../../Global/InvestCard/InvestCard";
import { Link } from "react-router-dom";

const LandingPageLayout = () => {
  return (
    <div>
      <LandingPageHeader />
      <NewToTrading />
      <TransactionTable />
      <Link
        to="/signup"
        className="w-full lg:w-[70%] lg:translate-y-56 translate-y-4  justify-center m-auto flex flex-wrap gap-4"
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
  );
};

export default LandingPageLayout;
