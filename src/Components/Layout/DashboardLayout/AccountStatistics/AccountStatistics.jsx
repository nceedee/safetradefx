import React, { useContext, useEffect, useState } from "react";
import BalanceCard from "../../../Global/BalanceCard/BalanceCard";
import { GiCash } from "react-icons/gi";
import { BsCashCoin } from "react-icons/bs";
import { FaHeadset } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import BalanceContext from "../../../Context/BalanceContext";
import useUpdateTotalInvest from "../../../Global/hook/useUpdateTotalInvest";
import { uid } from "../../../stores/stores";
import useUpdateTotalPayout from "../../../Global/hook/useUpdateTotalPayout";

const AccountStatistics = () => {
  const { currentBalance, loading } = useUpdateTotalInvest(uid.id);
  const { currentBalance: investcurrentBalance } = useUpdateTotalPayout(uid.id);
  useUpdateTotalInvest( uid.id );
  const [localEarnAmount, setLocalEarnAmount] = useState(null);
  

   useEffect(() => {
     // Fetch data from local storage and parse it
     const storedData = localStorage.getItem("investmentData");
     if (storedData) {
       const parsedData = JSON.parse(storedData);
       setLocalEarnAmount(parsedData.amount.topUps); // Assuming 'amount' is the field you need
     }
   }, []);

  const balanceContext = useContext(BalanceContext);
  return (
    <div className="mt-10">
      <h1 className="font-bold text-2xl text-center p-6">Account Statistics</h1>
      <div className="w-full flex flex-wrap gap-4">
        <BalanceCard
          icon={<GiCash className="text-6xl" />}
          amount={`${localEarnAmount}`}
          text="Total Invest"
          className="flex-1 min-w-[200px] md:min-w-[220px] lg:w-[200px] lg:h-[200px] flex items-center justify-center"
        />
        <BalanceCard
          icon={<BsCashCoin className="text-6xl" />}
          amount="$0.00"
          text="Total Payout"
          className="flex-1 min-w-[200px] md:min-w-[220px] lg:w-[200px] lg:h-[200px] flex items-center justify-center"
        />
      </div>
    </div>
  );
};

export default AccountStatistics;
