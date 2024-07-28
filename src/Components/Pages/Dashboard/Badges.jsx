import React from "react";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import SideBar from "../../Layout/DashboardLayout/SideBar/SideBar";

const Badges = () => {
  return (
    <div>
      <DashboardLayout routerName="Badges">
        <div className="bg-[#0f143a] text-white p-6">
          <SideBar />
        </div>
      </DashboardLayout>
    </div>
  );
};

export default Badges;
