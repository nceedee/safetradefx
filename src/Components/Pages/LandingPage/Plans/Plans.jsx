import React from 'react'
import { PlansLayout } from '../../../Layout/LandingPageLayout/PlansLayout/PlansLayout'
import { Purpose } from '../../../Layout/LandingPageLayout/Purpose/Purpose';
import Footer from '../../../Layout/LandingPageLayout/Footer/Footer';
import VideoSidePlans from '../../../Layout/LandingPageLayout/PlansLayout/VideoSidePlans/VideoSidePlans';
import SupportedPayment from '../../../Layout/LandingPageLayout/SupportedPayment/SupportedPayment';
import InvestCard from '../../../Global/InvestCard/InvestCard';

const Plans = () => {
  return (
    <div>
      <div className="relative z-40">
        <PlansLayout />
      </div>
      <div className="relative z-30 bg-white">
        <VideoSidePlans />
      </div>
      <div className="relative z-30 bg-white pt-14">
        <div className="w-full lg:w-[80%]  justify-center m-auto flex flex-wrap gap-4">
          <InvestCard
            name="STARTER PLAN"
            from="50"
            to="999"
            percent="5%"
            hours="20"
            className="bg-white text-black shadow-lg"
          />
          <InvestCard
            name="MINI PLAN"
            from="250"
            to="1500"
            percent="7.3%"
            hours="24"
            className="bg-white text-black shadow-lg"
          />
          <InvestCard
            name="PROFESSIONAL PLAN"
            from="1500"
            to="3000"
            percent="9.99%"
            hours="40"
            className="bg-white text-black shadow-lg"
          />
          <InvestCard
            name="PROMO PLAN"
            from="3000"
            to="9000"
            percent="9%"
            hours="10"
            className="bg-white text-black "
          />
        </div>
      </div>
      <div className="relative z-30 bg-white">
        <SupportedPayment />
      </div>
      <div className="relative z-30 bg-white">
        <Purpose />
      </div>
      <div className="bg-[#000624] text-white">
        <Footer />
        <p className="text-center pb-5">
          All right reserved 2024 &#169; safe trade fx
        </p>
      </div>
    </div>
  );
}

export default Plans
