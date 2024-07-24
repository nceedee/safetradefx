import React from "react";
import LandingPageLayout from "../../Layout/LandingPageLayout/LandingPageLayout";
import VideoSide from "../../Layout/LandingPageLayout/VideoSide/VideoSide";
import WhoWeAre from "../../Layout/LandingPageLayout/WhoWeAre/WhoWeAre";
import InsideBg from "../../Layout/LandingPageLayout/InsideBg/InsideBg";
import AchievedMission from "../../Layout/LandingPageLayout/AchievedMission/AchievedMission";
import Points from "../../Layout/LandingPageLayout/Points/Points";

const LandingPage = () => {
  return (
    <div className="relative">
      <div className="relative z-40">
        <LandingPageLayout />
      </div>
      <div className="bg-white">
        <div className="relative z-30 bg-white">
          <VideoSide />
        </div>
        <div className="relative z-30 bg-white">
          <WhoWeAre />
        </div>
        <div className="relative z-30 ">
          <AchievedMission />
        </div>
        
        <div className="relative z-5">
          <InsideBg />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
