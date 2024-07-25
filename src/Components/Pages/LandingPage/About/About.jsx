import React from "react";
import { AboutLayout } from "../../../Layout/LandingPageLayout/AboutLayout/AboutLayout";
import WhoWeAre from "../../../Layout/LandingPageLayout/WhoWeAre/WhoWeAre";
import { Purpose } from "../../../Layout/LandingPageLayout/Purpose/Purpose";
import Service from "../../../Layout/LandingPageLayout/Services/Services";
import Footer from "../../../Layout/LandingPageLayout/Footer/Footer";

const About = () => {
  return (
    <div>
      <div className="relative z-40">
        <AboutLayout />
      </div>
      <div className="relative z-30 bg-white">
        <WhoWeAre />
      </div>
      <div className="relative z-30 bg-white">
        <Purpose />
      </div>
      <div className="relative z-30 bg-white">
        <Service />
      </div>
      <div className="bg-[#000624] text-white">
        <Footer />
        <p className="text-center pb-5">
          All right reversed 2024 &#169; safe trade fx
        </p>
      </div>
    </div>
  );
};

export default About;
