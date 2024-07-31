import React from "react";
import InvestCard from "../../../Global/InvestCard/InvestCard";
import SideBar from "../../../Layout/DashboardLayout/SideBar/SideBar";
import DashboardLayout from "../../../Layout/DashboardLayout/DashboardLayout";

const PayoutHistory = () => {
  return (
    <div>
      <DashboardLayout routerName="Plan">
        <div className="bg-[#0f143a]">
          <div className="flex items-start md:flex-row m-auto p-6  space-y-4 md:space-y-0 md:space-x-6 text-white">
            <div className="w-full md:w-1/4 lg:block hidden">
              <SideBar />
            </div>
            <div className="w-full flex flex-wrap gap-4 items-center">
              <InvestCard
                name="STARTER PLAN"
                from="50"
                to="999"
                percent="5%"
                hours="20"
                className="bg-[#202b5d] "
              />
              <InvestCard
                name="MINI PLAN"
                from="250"
                to="1500"
                percent="7.3%"
                hours="24"
                className="bg-[#202b5d] "
              />
              <InvestCard
                name="PROFESSIONAL PLAN"
                from="1500"
                to="3000"
                percent="9.99%"
                hours="40"
                className="bg-[#202b5d] "
              />
              <InvestCard
                name="PROMO PLAN"
                from="3000"
                to="9000"
                percent="9%"
                hours="10"
                className="bg-[#202b5d] "
              />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default PayoutHistory;
