// Dashboard.jsx
import React from "react";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import SideBar from "../../Layout/DashboardLayout/SideBar/SideBar";
import BalanceCard from "../../Global/BalanceCard/BalanceCard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";

const Dashboard = () => {
  return (
    <DashboardLayout routerName="Dashboard">
      <div className="flex flex-col md:flex-row m-auto bg-[#0f143a] p-6 space-y-4 md:space-y-0 md:space-x-6 text-white">
        <div className="w-full md:w-1/4 lg:block hidden">
          <SideBar />
        </div>
        <div className="w-full md:w-3/4 flex flex-wrap justify-center gap-4">
          <BalanceCard
            amount="$2.00"
            icon={<AccountBalanceWalletIcon sx={{ fontSize: 50 }} />}
            text="Interest Balance"
            className="flex-1 min-w-[200px] md:min-w-[220px] lg:w-[80px] lg:h-[80px] flex items-center justify-center"
          />
          <BalanceCard
            amount="$0.00"
            icon={<MonetizationOnIcon sx={{ fontSize: 50 }} />}
            text="Monetary Balance"
            className="flex-1 min-w-[200px] md:min-w-[220px] lg:w-[80px] lg:h-[80px] flex items-center justify-center"
          />
          <BalanceCard
            amount="$0.00"
            icon={<LocalAtmIcon sx={{ fontSize: 50 }} />}
            text="Total Deposit"
            className="flex-1 min-w-[200px] md:min-w-[220px] lg:w-[80px] lg:h-[80px] flex items-center justify-center"
          />
          <BalanceCard
            amount="$0.00"
            icon={<PriceCheckIcon sx={{ fontSize: 50 }} />}
            text="Total Earn"
            className="flex-1 min-w-[200px] md:min-w-[220px] lg:w-[80px] lg:h-[80px] flex items-center justify-center"
          />
        </div>
        
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
