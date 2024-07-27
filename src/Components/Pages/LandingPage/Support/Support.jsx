import React from 'react'
import { SupportLayout } from '../../../Layout/LandingPageLayout/SupportLayout/SupportLayout'
import Footer from '../../../Layout/LandingPageLayout/Footer/Footer';
import SupportForm from '../../../Layout/LandingPageLayout/SupportLayout/SupportForm/SupportForm';

const Support = () => {
  return (
    <div>
      <div className="relative z-40">
        <SupportLayout />
      </div>
      <div className="relative z-30 bg-white">
        <SupportForm />
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

export default Support
