import React from "react";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import SideBar from "../../Layout/DashboardLayout/SideBar/SideBar";
import TableUi from "../../Global/Table/Table";

const ReferralBonus = () => {
  return (
    <div>
      <DashboardLayout routerName="Refferal Bonus">
        <div className="bg-[#0f143a] ">
          <div className="flex items-start md:flex-row m-auto p-6  space-y-4 md:space-y-0 md:space-x-6 text-white">
            <div className="w-full md:w-1/4 lg:block hidden">
              <SideBar />
            </div>
            <div className="w-full flex flex-wrap gap-4">
              <TableUi/>
            </div>
          </div>
          </div>
      </DashboardLayout>
    </div>
  );
};

export default ReferralBonus;
