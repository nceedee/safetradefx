import React from "react";
import BalanceCard from "../../../Global/BalanceCard/BalanceCard";
import { GiCash } from "react-icons/gi";
import { BsCashCoin } from "react-icons/bs";
import { FaHeadset } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";

const AccountStatistics = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl text-center p-6">Account Statistics</h1>
      <div className="w-full flex flex-wrap gap-4">
        <BalanceCard
          icon={<GiCash className="text-6xl" />}
          amount="$0"
          text="Total Invest"
          className="flex-1 min-w-[200px] md:min-w-[220px] lg:w-[200px] lg:h-[200px] flex items-center justify-center"
        />
        <BalanceCard
          icon={<BsCashCoin className="text-6xl" />}
          amount="$0"
          text="Total Payout"
          className="flex-1 min-w-[200px] md:min-w-[220px] lg:w-[200px] lg:h-[200px] flex items-center justify-center"
        />
        <BalanceCard
          icon={<FaHeadset className="text-6xl" />}
          amount="$0"
          text="Total Ticket"
          className="flex-1 min-w-[200px] md:min-w-[220px] lg:w-[200px] lg:h-[200px] flex items-center justify-center"
        />
        <BalanceCard
          icon={<IoIosPeople className="text-6xl" />}
          amount="$0"
          text="Total Referral Bonus"
          className="flex-1 min-w-[200px] md:min-w-[220px] lg:w-[200px] lg:h-[200px] flex items-center justify-center"
        />
      </div>
    </div>
  );
};

export default AccountStatistics;
