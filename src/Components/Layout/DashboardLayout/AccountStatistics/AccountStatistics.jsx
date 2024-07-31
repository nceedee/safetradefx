import React, { useContext } from "react";
import BalanceCard from "../../../Global/BalanceCard/BalanceCard";
import { GiCash } from "react-icons/gi";
import { BsCashCoin } from "react-icons/bs";
import { FaHeadset } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import BalanceContext from "../../../Context/BalanceContext";

const AccountStatistics = () => {
  const balanceContext = useContext(BalanceContext);
  return (
    <div className="mt-10">
      <h1 className="font-bold text-2xl text-center p-6">Account Statistics</h1>
      <div className="w-full flex flex-wrap gap-4">
        <BalanceCard
          icon={<GiCash className="text-6xl" />}
          amount={`$${balanceContext.totalInvest}.00`}
          text="Total Invest"
          className="flex-1 min-w-[200px] md:min-w-[220px] lg:w-[200px] lg:h-[200px] flex items-center justify-center"
        />
        <BalanceCard
          icon={<BsCashCoin className="text-6xl" />}
          amount={`$${balanceContext.totalPayout}.00`}
          text="Total Payout"
          className="flex-1 min-w-[200px] md:min-w-[220px] lg:w-[200px] lg:h-[200px] flex items-center justify-center"
        />
        <BalanceCard
          icon={<FaHeadset className="text-6xl" />}
          amount={`${balanceContext.totalTicket}`}
          text="Total Ticket"
          className="flex-1 min-w-[200px] md:min-w-[220px] lg:w-[200px] lg:h-[200px] flex items-center justify-center"
        />
        <BalanceCard
          icon={<IoIosPeople className="text-6xl" />}
          amount={`$${balanceContext.totalReferralBonus}.00`}
          text="Total Referral Bonus"
          className="flex-1 min-w-[200px] md:min-w-[220px] lg:w-[200px] lg:h-[200px] flex items-center justify-center"
        />
      </div>
    </div>
  );
};

export default AccountStatistics;
