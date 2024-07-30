import React from "react";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import SideBar from "../../Layout/DashboardLayout/SideBar/SideBar";
import ReferralLink from "../../Layout/DashboardLayout/ReferralLink/ReferralLink";

const MyReferral = () => {
  return (
    <div>
      <DashboardLayout routerName="My Referral">
        <div className="bg-[#0f143a] ">
          <div className="flex items-start md:flex-row m-auto p-6 space-y-4 md:space-y-0 md:space-x-6 text-white">
            <div className="w-full md:w-1/4 lg:block hidden">
              <SideBar />
            </div>
            <div className="w-full">
              <div className="w-full">
                <ReferralLink />
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default MyReferral;
