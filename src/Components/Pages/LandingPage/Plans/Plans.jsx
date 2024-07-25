import React from 'react'
import { PlansLayout } from '../../../Layout/LandingPageLayout/PlansLayout/PlansLayout'
import { Purpose } from '../../../Layout/LandingPageLayout/Purpose/Purpose';
import Footer from '../../../Layout/LandingPageLayout/Footer/Footer';
import VideoSidePlans from '../../../Layout/LandingPageLayout/PlansLayout/VideoSidePlans/VideoSidePlans';
import SupportedPayment from '../../../Layout/LandingPageLayout/SupportedPayment/SupportedPayment';

const Plans = () => {
  return (
    <div>
      <div className="relative z-40">
        <PlansLayout />
      </div>
      <div className="relative z-30 bg-white">
        <VideoSidePlans />
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
          All right reversed 2024 &#169; safe trade fx
        </p>
      </div>
    </div>
  );
}

export default Plans
