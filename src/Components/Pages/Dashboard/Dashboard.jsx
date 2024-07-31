import React, { useContext } from "react";
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
import ReferralLink from "../../Layout/DashboardLayout/ReferralLink/ReferralLink";
import { FaFileContract } from "react-icons/fa";
import BalanceCardTwo from "../../Global/BalanceCard/BalanceCardTwo";
import BalanceContext from "../../Context/BalanceContext";

const Dashboard = () => {
  const balanceContext = useContext(BalanceContext);
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
                amount={`$${balanceContext.mainBalance}.00`}
                icon={<AccountBalanceWalletIcon sx={{ fontSize: 50 }} />}
                text="Interest Balance"
                className="flex-1 min-w-[200px] md:min-w-[220px] lg:w-[200px] lg:h-[200px] flex items-center justify-center"
              />
              <BalanceCard
                amount={`$${balanceContext.interestBalance}.00`}
                icon={<MonetizationOnIcon sx={{ fontSize: 50 }} />}
                text="Interest Balance"
                className="flex-1 min-w-[200px] md:min-w-[220px] lg:w-[200px] lg:h-[200px] flex items-center justify-center"
              />
              <BalanceCard
                amount={`$${balanceContext.totalDeposit}.00`}
                icon={<LocalAtmIcon sx={{ fontSize: 50 }} />}
                text="Total Deposit"
                className="flex-1 min-w-[200px] md:min-w-[220px] lg:w-[200px] lg:h-[200px] flex items-center justify-center"
              />
              <BalanceCard
                amount={`$${balanceContext.totalEarn}.00`}
                icon={<PriceCheckIcon sx={{ fontSize: 50 }} />}
                text="Total Earn"
                className="flex-1 min-w-[200px] md:min-w-[220px] lg:w-[200px] lg:h-[200px] flex items-center justify-center"
              />
            </div>
            <div className="flex flex-col md:flex-row flex-wrap space-y-4 md:space-y-0 md:space-x-4 mt-4">
              <div className="flex-1 h-auto w-[100%] ">
                <DashboardChart />
              </div>
              <div className="flex-1 h-auto w-[100%]  flex md:flex-row">
                <RoundedChart />
              </div>
            </div>
            <AccountStatistics />
            <div className="w-full mt-4 flex flex-wrap gap-4">
              <ReferralLink />
              <BalanceCardTwo
                icon={<FaFileContract className="text-7xl" />}
                text="The last Referral Bonus"
                amount={`$${balanceContext.totalReferralBonus}.00`}
                className="flex-1 min-w-[200px] md:min-w-[220px] lg:w-[200px] lg:h-[200px]"
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
