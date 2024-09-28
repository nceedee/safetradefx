import React from "react";
import LandingPageHeader from "../../../Layout/LandingPageLayout/LandingPageLayoutHeader/LandingPageHeader";
import certificatefrom from "../../../../Assets/Images/safetradefx_document.jpg";
import Footer from "../../../Layout/LandingPageLayout/Footer/Footer";

export const About = () => {
  return (
    <div className="relative bg-white text-gray-800">
      <LandingPageHeader />
      <div className="-translate-y-72 flex flex-col items-center">
        <div className="w-full sm:w-[75%] text-white md:w-[50%] ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200">
            About Us
          </h1>
          <p className="mt-4">
            SafeTrade Fx is primarily the professionalism and well-coordinated
            work of our team towards an overall goal - a stable increase of the
            capital of our investors.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 px-4 md:px-0 text-gray-800">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-2">Activity of the Company</h2>
          <p className="mb-4">
            There has always been a demand for quality investment services. In
            an attempt to satisfy this demand, the idea of creating a Coin
            Dynamo company came up. Robert Baker set a goal to bring together
            the best specialists in their field under the wing of one company.
          </p>
          <p className="mb-4">
            Collaborative work for two years has shown results that have
            exceeded all expectations. By diversifying our capital into five
            areas, we have been able to reach an average monthly rate of over
            20%. Currently, we invest in such instruments as:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>IPO - the first public sale of shares of a joint stock company.</li>
            <li>ICO - the initial placement of new cryptocurrency units.</li>
            <li>Startup - young and promising companies that have recently started their activities.</li>
            <li>Offline business - buying a pool or share in a large business.</li>
            <li>PoS Mining - an online mining option without the need to purchase expensive equipment.</li>
          </ul>
          <p>
            In February 2018, we decided to create the Safe Trade Fx
            website to receive funds from private investors who want to
            increase their capital. After obtaining our license, our company
            started to show results for the first investors. We have also
            established an insurance fund to be used in cases of force majeure.
            Our mission is to help as many people as possible who want to start
            investing but lack practical experience in this area.
          </p>
        </div>

        <div className="md:w-1/2 flex flex-col items-center">
          <img
            src={certificatefrom}
            alt="Legal Registration Certificate"
            className="w-full h-auto max-w-[400px] mb-4 rounded-lg shadow-lg"
          />
          <h3 className="text-lg font-medium text-center">
            Legal registration in Australia, certificate number
            <span className="font-bold"> №68134567865</span>
          </h3>
        </div>
      </div>

      <Footer />
    </div>
  );
};
