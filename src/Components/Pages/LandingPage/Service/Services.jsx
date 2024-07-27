import React from 'react'
import { ServicesLayout } from '../../../Layout/LandingPageLayout/ServicesLayout/ServicesLayout'
import Service from '../../../Layout/LandingPageLayout/Services/Services';
import Footer from '../../../Layout/LandingPageLayout/Footer/Footer';

const Services = () => {
  return (
    <div>
      <div className="relative z-40">
        <ServicesLayout />
      </div>
      <div className="relative z-30 bg-white">
        <Service />
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

export default Services
