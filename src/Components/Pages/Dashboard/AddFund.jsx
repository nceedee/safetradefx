import React from "react";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import SideBar from "../../Layout/DashboardLayout/SideBar/SideBar";
import CoinCard from "../../Global/CoinCard/CoinCard";
import btc from "../../../Assets/Images/btc.png";
import img2 from "../../../Assets/Images/img2.png";
import img3 from "../../../Assets/Images/img3.png";
import img4 from "../../../Assets/Images/img4.png";
import img5 from "../../../Assets/Images/img5.png";
import img6 from "../../../Assets/Images/img6.png";

const AddFund = () => {
  return (
    <div>
      <DashboardLayout routerName="Add Funds">
        <div className="bg-[#0f143a] ">
          <div className="flex items-start md:flex-row m-auto p-6  space-y-4 md:space-y-0 md:space-x-6 text-white">
            <div className="w-full md:w-1/4 lg:block hidden">
              <SideBar />
            </div>
            <div className="w-full flex flex-wrap gap-4 ">
              <CoinCard img={btc} />
              <CoinCard img={img2} />
              <CoinCard img={img3} />
              <CoinCard img={img4} />
              <CoinCard img={img5} />
              <CoinCard img={img6} />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default AddFund;
