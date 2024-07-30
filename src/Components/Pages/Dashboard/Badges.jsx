import React from "react";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import SideBar from "../../Layout/DashboardLayout/SideBar/SideBar";
import BadgesCard from "../../Layout/DashboardLayout/BadgesCard/BadgesCard";
import badgeOne from '../../../Assets/Images/one.png'
import badgeTwo from '../../../Assets/Images/two.png'
import badgeThree from '../../../Assets/Images/three.png'
import badgeFour from '../../../Assets/Images/four.png'

const Badges = () => {
  return (
    <div>
      <DashboardLayout routerName="Badges">
        <div className="bg-[#0f143a] ">
          <div className="flex items-start md:flex-row m-auto p-6  space-y-4 md:space-y-0 md:space-x-6 text-white">
            <div className="w-full md:w-1/4 lg:block hidden">
              <SideBar />
            </div>
            <div className="w-full flex flex-wrap gap-4 flex-row">
              <BadgesCard
                badge={badgeOne}
                level="Level 1"
                text="By signing up to the account"
                amountOne="$20.00"
                amountTwo="$50.00"
                amountThree="$5.00"
              />
              <BadgesCard
                badge={badgeTwo}
                level="Level 2"
                text="By earning $15 from the site"
                amountOne="$50.00"
                amountTwo="$100.00"
                amountThree="$15.00"
              />
              <BadgesCard
                badge={badgeThree}
                level="Level 3"
                text="By earning $25 from the site"
                amountOne="$80.00"
                amountTwo="$120.00"
                amountThree="$25.00"
              />
              <BadgesCard
                badge={badgeFour}
                level="Level 4"
                text="By earning $50 from the site"
                amountOne="$100.00"
                amountTwo="$200.00"
                amountThree="$50.00"
              />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default Badges;
