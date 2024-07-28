import React from "react";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import SideBar from "../../Layout/DashboardLayout/SideBar/SideBar";

const ReferralBonus = () => {
  return (
    <div>
      <DashboardLayout routerName="Refferal Bonus">
        <div className="bg-[#0f143a] text-white p-6">
          <SideBar />
        </div>
      </DashboardLayout>
    </div>
  );
};

export default ReferralBonus;
