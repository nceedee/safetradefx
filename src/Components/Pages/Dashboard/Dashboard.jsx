import React from "react";
import { uid } from "../../stores/stores";
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
import useUpdateMainBalance from "../../Global/hook/useUpdateMainBalance";
import useUpdateInterestBalance from "../../Global/hook/useUpdateInterestBalance";
import useUpdateTotalDeposit from "../../Global/hook/useUpdateTotalDeposit";
import useUpdateTotalEarn from "../../Global/hook/useUpdateTotalEarn";

const Dashboard = () => {
  const { currentBalance, loading } = useUpdateMainBalance(uid.id);
  const { currentBalance: earncurrentBalance } = useUpdateTotalEarn(uid.id);
  const { currentBalance: depositCurrentBalance, loading: depostLoading } =
    useUpdateTotalDeposit(uid.id);
  useUpdateMainBalance(uid.id);
  const { interestCurrentBalance, InterestLoading } = useUpdateInterestBalance(
    uid.id
  );

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
                amount={`$${
                  currentBalance.toLocaleString() !== null
                    ? currentBalance.toLocaleString()
                    : "loading..."
                }.00`}
                icon={<AccountBalanceWalletIcon sx={{ fontSize: 50 }} />}
                text="Main Balance"
                className="flex-1 min-w-[200px] md:min-w-[220px] lg:w-[200px] lg:h-[200px] flex items-center justify-center"
              />
              <BalanceContext.Consumer>
                {({
                  interestBalance,
                  totalDeposit,
                  totalEarn,
                  totalReferralBonus,
                }) => (
                  <>
                    <BalanceCard
                      amount={`$${
                        interestCurrentBalance.toLocaleString() !== null
                          ? interestCurrentBalance.toLocaleString()
                          : "loading..."
                      }.00`}
                      icon={<MonetizationOnIcon sx={{ fontSize: 50 }} />}
                      text="Interest Balance"
                      className="flex-1 min-w-[200px] md:min-w-[220px] lg:w-[200px] lg:h-[200px] flex items-center justify-center"
                    />
                    <BalanceCard
                      amount={`$${
                        depositCurrentBalance.toLocaleString() !== null
                          ? depositCurrentBalance.toLocaleString()
                          : "loading..."
                      }.00`}
                      icon={<LocalAtmIcon sx={{ fontSize: 50 }} />}
                      text="Total Deposit"
                      className="flex-1 min-w-[200px] md:min-w-[220px] lg:w-[200px] lg:h-[200px] flex items-center justify-center"
                    />
                    <BalanceCard
                      amount={`$${
                        earncurrentBalance.toLocaleString() !== null
                          ? earncurrentBalance.toLocaleString()
                          : "loading..."
                      }.00`}
                      icon={<PriceCheckIcon sx={{ fontSize: 50 }} />}
                      text="Total Earn"
                      className="flex-1 min-w-[200px] md:min-w-[220px] lg:w-[200px] lg:h-[200px] flex items-center justify-center"
                    />
                    <DashboardChart />
                    <RoundedChart />

                    <AccountStatistics />
                  </>
                )}
              </BalanceContext.Consumer>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
