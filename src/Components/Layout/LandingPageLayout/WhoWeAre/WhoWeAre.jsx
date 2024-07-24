import React from "react";
import safetradefx from "../../../../Assets/Images/safetradefx.png";
import underlineimg from "../../../../Assets/Images/h6-sub-divider-img.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import h6phone1 from "../../../../Assets/Images/h6-phone-app2.png";
import h6phone2 from "../../../../Assets/Images/h6-phone-app3.png";

const WhoWeAre = () => {
  return (
    <div className="flex justify-evenly pt-[200px] w-[100%] ">
      <div className="w-[40%] flex space-y-3 flex-col">
        <div>
          <h4 className="text-blue-800 text-2xl font-bold">Who We Are?</h4>
          <img src={underlineimg} alt="" />
        </div>

        <h1 className="font-bold text-4xl ">Safe Trade FX</h1>
        <p>
          We, the Safe Trade FX Team, generate superior and sustainable
          performance for our stakeholders, investors, and business partners.
          Safe Trade FX is an asset management firm that focuses exclusively on
          investing in digital currencies. We don’t hide behind complex pricing
          structures or financial jargon. We don’t keep you in the dark when it
          comes to your investments or how they’re performing. Instead, we give
          you complete transparency – and want you to feel empowered. We build
          leading global businesses and drive sustainable growth on behalf of
          our institutional investors and key stakeholders.
        </p>

        <div>
          <div className="flex space-x-2">
            <CheckCircleIcon className="text-green-600" />
            <p>
              Our mission is to act as the catalyst for widespread blockchain
              adoption and innovation.
            </p>
          </div>
          <div className="flex space-x-2">
            <CheckCircleIcon className="text-green-600" />
            <p>
              We achieve thіѕ thrоugh оur іnvеѕtmеnt ѕtrаtеgіеѕ, adhering tо оur
              vаluеѕ аnd іnvеѕtmеnt
            </p>
          </div>
          <div className="flex space-x-2">
            <CheckCircleIcon className="text-green-600" />
            <p>
              We believe that digital currencies breakdown borders, democratize
              money and transforms a broken infrastructure into a future for
              all.
            </p>
          </div>
          <div className="flex space-x-2">
            <CheckCircleIcon className="text-green-600" />
            <p>
              Digital currencies is the greatest innovation since the advent of
              the internet. And this is why our mission is to make digital
              currency investing, as easy as possible to anyone regardless of
              Age or Net-worth.
            </p>
          </div>
        </div>
      </div>

      <div className="w-[40%] relative">
        <img
          src={h6phone1}
          alt=""
          className="absolute right-0 translate-x-20 z-50 animate-bounce"
        />
        <img src={safetradefx} alt="" className="w-[100%]" />
        <img
          src={h6phone2}
          alt=""
          className="absolute  z-50 bottom-0 animate-bounce"
        />
      </div>
    </div>
  );
};

export default WhoWeAre;
