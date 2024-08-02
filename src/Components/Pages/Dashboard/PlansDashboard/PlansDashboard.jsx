import React from "react";
import InvestCard from "../../../Global/InvestCard/InvestCard";
import SideBar from "../../../Layout/DashboardLayout/SideBar/SideBar";
import DashboardLayout from "../../../Layout/DashboardLayout/DashboardLayout";

const PlansDashboard = () => {
  const plans = [
    { name: "STARTER PLAN", min: 50, max: 999, percent: "5%", hours: "20" },
    { name: "MINI PLAN", min: 250, max: 1500, percent: "7.3%", hours: "24" },
    {
      name: "PROFESSIONAL PLAN",
      min: 1500,
      max: 3000,
      percent: "9.99%",
      hours: "40",
    },
    { name: "PROMO PLAN", min: 3000, max: 9000, percent: "9%", hours: "10" },
  ];

  return (
    <div>
      <DashboardLayout routerName="Plan">
        <div className="bg-[#0f143a]">
          <div className="flex items-start md:flex-row m-auto p-6 space-y-4 md:space-y-0 md:space-x-6 text-white">
            <div className="w-full md:w-1/4 lg:block hidden">
              <SideBar />
            </div>
            <div className="w-full flex flex-wrap gap-4 items-center">
              {plans.map((plan) => (
                <InvestCard
                  key={plan.name}
                  name={plan.name}
                  from={plan.min}
                  to={plan.max}
                  percent={plan.percent}
                  hours={plan.hours}
                  className="bg-[#202b5d]"
                />
              ))}
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default PlansDashboard;
