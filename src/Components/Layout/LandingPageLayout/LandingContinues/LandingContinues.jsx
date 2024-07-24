import React from "react";
import Points from "../Points/Points";
import { Purpose } from "../Purpose/Purpose";
import Services from "../Services/Services";
import RateDashboard from "../RateDashboard/RateDashboard";
import SupportedPayment from "../SupportedPayment/SupportedPayment";
import Footer from "../Footer/Footer";

const LandingContinues = () => {
  return (
    <div>
      <div className="bg-blue-100 ">
        <Points />
      </div>
      <div>
        <Purpose />
      </div>
      <div className="bg-white">
        <Services />
      </div>

      <div className="bg-white">
        <SupportedPayment />
      </div>
      <div className="bg-white">
        <RateDashboard />
      </div>
      <div className="bg-[#000624]">
        <Footer />
      </div>
    </div>
  );
};

export default LandingContinues;
