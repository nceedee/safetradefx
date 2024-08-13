import React, { useState, useEffect } from "react";
import { uid } from "../../stores/stores"; // Ensure this is correctly imported and available
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import SideBar from "../../Layout/DashboardLayout/SideBar/SideBar";
import BalanceCard from "../../Global/BalanceCard/BalanceCard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import DashboardChart from "../../Layout/DashboardLayout/DashboardChart/DashboardChart";
import RoundedChart from "../../Layout/DashboardLayout/DashboardChart/RoundedChart";
import AccountStatistics from "../../Layout/DashboardLayout/AccountStatistics/AccountStatistics";
import useUpdateMainBalance from "../../Global/hook/useUpdateMainBalance";
import useUpdateInterestBalance from "../../Global/hook/useUpdateInterestBalance";
import useUpdateTotalEarn from "../../Global/hook/useUpdateTotalEarn";

const Dashboard = () => {
  // Ensure uid and uid.id are defined before using them
  const userId = uid?.id || ""; // Default to an empty string if uid or uid.id is not defined

  const { currentBalance } = useUpdateMainBalance(userId);
  const { currentBalance: earncurrentBalance } = useUpdateTotalEarn(userId);
  const { interestCurrentBalance } = useUpdateInterestBalance(userId);

  // State for local storage data
  const [localEarnAmount, setLocalEarnAmount] = useState(null);

  useEffect(() => {
    // Fetch data from local storage and parse it
    const storedData = localStorage.getItem("investmentData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setLocalEarnAmount(parsedData.amount); // Assuming 'amount' is the field you need
    }
  }, []);

  // Use local storage amount if available, otherwise use the fetched balance
  const earnAmount =
    localEarnAmount !== null ? localEarnAmount : earncurrentBalance;

  return (
    <DashboardLayout routerName="Dashboard">
      <div className="bg-[#0f143a]">
        <div className="flex items-start md:flex-row m-auto p-6 space-y-4 md:space-y-0 md:space-x-6 text-white">
          <div className="w-full md:w-1/4 lg:block hidden">
            <SideBar />
          </div>
          <div className="w-full">
            <div className="w-full flex flex-wrap gap-4">
              <BalanceCard
                amount={`${
                  currentBalance !== null
                    ? currentBalance.toLocaleString()
                    : "loading..."
                }.00`}
                icon={<AccountBalanceWalletIcon sx={{ fontSize: 50 }} />}
                text="Main Balance"
                className="flex-1 min-w-[200px] md:min-w-[220px] lg:w-[200px] lg:h-[200px] flex items-center justify-center"
              />
              <BalanceCard
                amount={`${
                  interestCurrentBalance !== null
                    ? interestCurrentBalance.toLocaleString()
                    : "loading..."
                }.00`}
                icon={<MonetizationOnIcon sx={{ fontSize: 50 }} />}
                text="Interest Balance"
                className="flex-1 min-w-[200px] md:min-w-[220px] lg:w-[200px] lg:h-[200px] flex items-center justify-center"
              />
              <BalanceCard
                amount={`${
                  currentBalance !== null
                    ? currentBalance.toLocaleString()
                    : "loading..."
                }.00`}
                icon={<LocalAtmIcon sx={{ fontSize: 50 }} />}
                text="Total Deposit"
                className="flex-1 min-w-[200px] md:min-w-[220px] lg:w-[200px] lg:h-[200px] flex items-center justify-center"
              />
              <BalanceCard
                amount={`${
                  earnAmount !== null
                    ? earnAmount.toLocaleString()
                    : "loading..."
                }.00`}
                icon={<PriceCheckIcon sx={{ fontSize: 50 }} />}
                text="Total Earn"
                className="flex-1 min-w-[200px] md:min-w-[220px] lg:w-[200px] lg:h-[200px] flex items-center justify-center"
              />
              <DashboardChart />
              <RoundedChart />
              <AccountStatistics />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
